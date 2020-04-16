import { fetchApi } from "./utils/fetchApi";
import { store } from "./utils/store";
import { router } from "./utils/router";
import { IAppOption } from "../typings";
import { GetSystemInfoRes } from "./models/wxModels";
require('./libs/Mixins.js');
const themeListeners: Function[] = [];

App<IAppOption>({
  fetchApi: fetchApi,
  store: store,
  router: router,
  miniProgramInfo: wx.getAccountInfoSync().miniProgram,
  // pluginInfo: wx.getAccountInfoSync().plugin,
  globalData: {
    isIpx: false,
    statusBarHeight: 0,
    navBarHeight: 0,
    theme: 'default',
  },
  onLaunch() {
    const _this = this;

    wx.getSystemInfo({
      success: function (res: GetSystemInfoRes) {
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
  },

  themeChanged(theme: string) {
    this.globalData.theme = theme;
    themeListeners.forEach((listener) => {
      listener(theme);
    });
  },

  watchThemeChange(listener: Function) {
    if (themeListeners.indexOf(listener) < 0) {
      themeListeners.push(listener);
    }
  },

  unWatchThemeChange(listener: Function) {
    const index = themeListeners.indexOf(listener);
    if (index > -1) {
      themeListeners.splice(index, 1);
    }
  },
})