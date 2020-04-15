import { IAppOption } from "../../typings";
import { PayActionForm, WXPayObj } from "../models/pay";
import { resultData } from "../models/http";
import { Apis } from "../configs/api";

const app = <IAppOption>getApp();

const payByPayActionForm = function ({ payDataForm, sucFn, completeFn }: PayActionForm) {
    app.fetchApi?.fetch("POST", Apis.GET_PAY_INFO, payDataForm).then((res) => {
        if (res) {
            const payData = <WXPayObj>(res as unknown as resultData)?.data
            callWXPay(payData, sucFn, completeFn);
        }
    });
};

const callWXPay = function (payData: WXPayObj, sucFn: any, completeFn: any) {
    wx.requestPayment({
        ...payData,
        success() {
            sucFn();
        },
        fail() {
            wx.showToast({
                title: "支付已取消",
                icon: "none"
            });
        },
        complete() {
            completeFn();
        }
    });
};

export { payByPayActionForm }