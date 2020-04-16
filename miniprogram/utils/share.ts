import { Share } from "../models/share";

const setShareParam = (userInfo?: any, corpId?: string, shareSucFn?: Function, shareFailFn?: Function) => {
    const sharerId = userInfo ? userInfo["id"] : "";
    const sharerCorp = corpId || "";
    const path = `/pages/loading/loading?sharerId=${sharerId}&shareCorp=${sharerCorp}`;
    const imageUrl = "/assets/img/share_banner_v4.png";
    const title = "疫情帮扶政策，你符合吗？<一秒自查>";
    const success = () => {
        shareSucFn ? shareSucFn() : null
    }
    const fail = () => {
        shareFailFn ? shareFailFn() : null
    }

    return new Share(title, path, imageUrl, success, fail);
};

export { setShareParam }