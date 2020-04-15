class PayDataForm {
    openId: string;
    corpId: string;
    productId: string;
    planId: string;
    totalFee: number;
    action: string;
    source: string;
    couponId: string;
    payFee: number;
    constructor(openId: string, corpId: string, productId: string, planId: string, totalFee: number, action: string, source: string, couponId: string, payFee: number) {
        (this.openId = openId),
            (this.corpId = corpId),
            (this.productId = productId),
            (this.planId = planId),
            (this.totalFee = totalFee),
            (this.action = action),
            (this.couponId = couponId),
            (this.payFee = payFee),
            (this.source = source);
    }
}

interface PayActionForm { payDataForm: PayDataForm, sucFn: Function, completeFn: Function }

interface WXPayObj {
    timeStamp: string,
    nonceStr: string,
    package: string,
    signType: "MD5" | "HMAC-SHA256" | undefined,
    paySign: string,
}

export { PayDataForm, PayActionForm, WXPayObj }