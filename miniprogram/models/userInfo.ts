interface LoginData {
    openid: string,
    session_key: string,
    unionid: string,
    errcode: number,
    errmsg: string
}


interface UserInfo {
    id: string,
    name: string,
    gender: string,
    unionId: string,
    role: string,
    joinedActivityId: number,
    updatePrivacy: boolean,
    coupons: string[]
}


class UserSession {
    sessionKey: string;
    encryptData: string;
    iv: string;

    constructor(sessionKey: string, encryptData: string, iv: string) {
        (this.sessionKey = sessionKey), (this.encryptData = encryptData), (this.iv = iv);
    }
}

export { LoginData, UserInfo, UserSession }