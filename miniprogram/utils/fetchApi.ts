const defaultAuth = "opV_P5";
import { apiConfig } from "../configs/api";
interface ApiParams {
  baseURL: string;
  header: httpHeader;
  withBaseURL?: boolean;
}

interface httpHeader {
  "content-type": string;
  Authorization: string;
}

interface httpResponse {
  data: any;
  statusCode: number;
}

interface resData {
  data: any;
  errCode: number;
}

class ApiFetch {
  withBaseURL: boolean;
  baseURL: string;
  header: httpHeader;

  constructor(params: ApiParams) {
    this.withBaseURL = params.withBaseURL || false;
    this.baseURL = params.baseURL;
    this.header = params.header;
  }

  fetch(
    method:
      | "GET"
      | "OPTIONS"
      | "HEAD"
      | "POST"
      | "PUT"
      | "DELETE"
      | "TRACE"
      | "CONNECT"
      | undefined,
    url: string,
    data?: object,
    noTokenRequired?: boolean,
    showLoading?: boolean
  ) {
    const _this = this;
    if (!noTokenRequired) {
      const loginData = wx.getStorageSync("loginData");
      const authToken = loginData
        ? loginData["unionId"]
        : wx.getStorageSync("unionId");
      _this.header.Authorization = authToken || _this.header.Authorization;
    }

    return new Promise((resolve: any, reject: any) => {
      wx.request({
        header: _this.header,
        data: data,
        url: _this.withBaseURL ? _this.baseURL + url : url,
        method: method || "GET",
        success(res: httpResponse) {
          _this.handleRes(res, _this, resolve, reject);
        },
        fail(e) {
          wx.showToast({
            title: `接口调用失败:${e.errMsg}`,
            icon: "none"
          });
        },
        complete() {
          showLoading ? wx.hideLoading() : null;
        }
      });
    });
  }

  handleRes(res: httpResponse, that: any, resolve: any, reject: any) {
    const statusCode = res.statusCode;
    const resData = <resData>res.data;
    if (statusCode >= 200 && statusCode < 300) {
      if (!that.judgeErrCode(resData.errCode, reject)) {
        resolve(resData);
      }
    } else {
      that.judgeStatusCode(res.statusCode, reject);
    }
  }

  judgeErrCode(errCode: number, reject: any) {
    let hint;
    switch (errCode) {
      case 0:
        break;
      default:
        hint = "未知错误！";
    }
    if (hint) {
      wx.showToast({
        title: hint,
        icon: "none"
      });
      reject();
    }
    return hint
  }

  judgeStatusCode(statusCode: number, reject: any) {
    let hint;
    switch (statusCode) {
      case 404:
        hint = "服务器正在升级...";
        break;
      default:
        hint = `服务器正在维护中，请稍后再试！ 状态码：${statusCode}`;
    }
    if (hint) {
      wx.showToast({
        title: hint,
        icon: "none"
      });
      reject();
    }
  }
}

const fetchApi = new ApiFetch({
  baseURL: apiConfig.baseUrl,
  withBaseURL: true,
  header: {
    "content-type": "application/json",
    Authorization: defaultAuth
  }
});

export { fetchApi };
