import { fetchApi } from "./utils/fetchApi";
import { store } from "./utils/store";
import { router } from "./utils/router";

App<IAppOption>({
  fetchApi: fetchApi,
  store: store,
  router: router,
  miniProgramInfo: wx.getAccountInfoSync().miniProgram,
  pluginInfo: wx.getAccountInfoSync().plugin,
  globalData: {
    isIpx: false,
    statusBarHeight: 0,
    navBarHeight: 0
  },
  onLaunch() {
    const _this = this;

    wx.getSystemInfo({
      success: function (res: WechatMiniprogram.GetSystemInfoSyncResult) {
        _this.globalData.statusBarHeight = res.statusBarHeight;
        _this.globalData.navBarHeight = 44 + res.statusBarHeight;
        const iphoneNormalProp = 1.78;
        if (
          res.platform === "ios" &&
          res.windowHeight / res.windowWidth > iphoneNormalProp
        ) {
          _this.globalData.isIpx = true;
        }
      }
    });
  },

  onError(errMsg: string) {
    console.log('错误提醒：', errMsg);
  }
})