import { IAppOption } from "../../typings";
import { Apis } from "../configs/api";
import { resultData } from "../models/http";
import { LoginData, UserInfo, UserSession } from "../models/userInfo";
import { GetUserInfoRes, LoginSucRes } from "../models/wxModels";

const app = <IAppOption>getApp();

const WXLogin = (needUnionId: boolean, sucFn?: Function) => {
    wx.login({
        success(res: LoginSucRes) {
            if (res.code) {
                app.fetchApi?.fetch('GET', `${Apis.USER_LOGIN}/${res.code}`).then(res => {
                    const data: LoginData = (res as unknown as resultData).data
                    if (needUnionId) {
                        getUnionId(data.openid);
                    }
                    try {
                        app.store?.setItem("loginData", data);
                        sucFn ? sucFn() : "";
                    } catch (e) { }
                });
            }
        }
    });
};

const getUnionId = (openId: string) => {
    app.fetchApi?.fetch('GET', `${Apis.GET_UNIONID}/${openId}`).then(res => {
        const data: UserInfo = (res as unknown as resultData).data
        if (data && data.unionId) {
            app.store?.setItem("userInfo", data)
        } else if (!data) {
            app.store?.clear("userInfo")
        }
    });
};

const checkSession = (sucFn: Function, failFn: Function) => {
    wx.checkSession({
        success() {
            sucFn();
        },
        fail() {
            failFn();
        }
    });
}

const checkSessionOnLaunch = () => {
    const checkSessionSuc = () => {
        const loginData: LoginData = app.store?.getItem("loginData");
        if (loginData.openid) {
            getUnionId(loginData.openid);
        } else {
            WXLogin(true);
        }
    }
    const checkSessionFail = () => WXLogin(true)
    checkSession(checkSessionSuc, checkSessionFail)
}

const getUserBySessionKey = (detail: GetUserInfoRes, sucFn?: Function, sucParam?: any) => {
    const checkSessionSuc = () => {
        const loginData: LoginData = app.store?.getItem("loginData");
        if (loginData) {
            app.fetchApi?.fetch('POST', Apis.USER_INFO, new UserSession(loginData.session_key, detail.encryptedData, detail.iv))
                .then(res => {
                    const data: UserInfo = (res as unknown as resultData).data
                    if (data.unionId && data) {
                        app.store?.setItem("unionId", data.unionId);
                        sucFn ? sucFn(sucParam) : "";
                    }
                });
        } else {
            loginAgain(detail);
        }
    }
    const checkSessionFail = () => {
        loginAgain(detail);
    }
    checkSession(checkSessionSuc, checkSessionFail);
};

const loginAgain = (detail: GetUserInfoRes) => {
    const loginSucFn = () => { getUserBySessionKey(detail) }
    WXLogin(false, loginSucFn);
};


export { WXLogin, getUnionId, checkSessionOnLaunch, getUserBySessionKey }
