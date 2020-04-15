const isDev = false;
const BaseUrl = `https://${isDev ? "dev" : "m"}.nbcfb.com`;

const FileUrlHeader = `https://${
  isDev ? "devimg.nbcfb.com" : "cdn.nbcfb.com"
  }/qr/`;

const ImgUrlHeader = `https://${
  isDev ? "devimg.nbcfb.com" : "cdn.nbcfb.com"
  }/post/`;

const Apis = {
  USER_LOGIN: "/wx/user/login",
  USER_INFO: "/wx/user/info",
  GET_UNIONID: "/user/info",
  GET_USER_DETAIL: "/user/detail",
  GET_SMS_CODE: "/sms/code",
  POST_SMS_CODE: "/sms/verify",
  UPDATE_USERINFO: "/user/+",
  GET_PLAN_REPORT: "/plan/report",
  GET_MARKET_REPO: "/plan/market/report",
  GET_CORP_LIST: "/corp/name",
  GET_MARKET_CORP_LIST: "/corp/market",
  GET_DF_PLAN: "/plan/df",
  GET_PLAN_BY_ID: "/plan",
  GET_PRODUCT: "/product",
  GET_EXPIRE_PRODUCT: "/product/expire",
  GET_PAY_INFO: "/pay",
  SET_REPO_STATUS: "/plan/report/read",
  GET_PROD_DISC: "/product/discount",
  CHECK_CLIENT: "/client/ck",
  ADD_CONTACT: "/contact/+",
  UPDATE_CONTACT: "/contact/!",
  RECORD_LOG_IN: "/contact/record/login",
  GET_COUPONS: "/coupon/register",
  GET_PRIVACY_POLICY: "/policy",
  UPDATE_PRIVACY_RELATION: "/policy/!",
  CLIENT_SWITCH_CORP: "/client/switch",
  CREATE_SHARE_IMG: "/campaign/share/img",
  GET_SHARE_CAMPAIGN_INFO: "/campaign/share",
  GET_SHARE_CAMPAIGN_CONTACT: "/campaign/share/contact",
  GET_COUPONS_FOR_CONTACT: "/coupon/contact",
  GET_COUPONS_FOR_CLIENT: "/coupon/client",
  GET_UNUSEDCOUPON_COUNT: "/coupon/count",
  GET_USER_PHONE: "/wx/user/phone",
  GET_POST_IMG: "/post",
  GET_CONTACT_DEMAND: "/contact/demand",
  UPDATE_CONTACT_DEMAND: "/contact/demand/!",
  GET_PROD_DTL: "/product/corp",
  GET_RECOMMEND_PROD: "/product/recommend",
  GET_PURCHASED_PROD: "/product/purchased",
  POST_CUSTOMER_CASE: "/customer_case/+",
  GET_PROD_BY_COUPON: "/product/coupon",
  GET_COUPON_BY_PLAN: "/coupon/plan",
  PAY_DIRECT: "/pay/direct"
};

export { BaseUrl, Apis, FileUrlHeader, ImgUrlHeader };
