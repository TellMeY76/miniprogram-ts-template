const shareParam = function (userInfo?: any, corpId?: string, shareSucFn?: Function, shareFailFn?: Function) {
    const sharerId = userInfo ? userInfo["id"] : "";
    const sharerCorp = corpId || "";
    const path = `/pages/loading/loading?sharerId=${sharerId}&shareCorp=${sharerCorp}`;
    return {
        title: "疫情帮扶政策，你符合吗？<一秒自查>",
        path: path,
        imageUrl: "/assets/img/share_banner_v4.png",
        success: function () {
            shareSucFn ? shareSucFn() : null
        },
        fail: function () {
            shareFailFn ? shareFailFn() : null
        }
    };
};

export { shareParam }