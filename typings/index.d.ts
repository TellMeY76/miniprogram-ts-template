/// <reference path="./types/index.d.ts" />

import { ApiFetch } from "../miniprogram/utils/fetchApi";
import { WxStorage } from "../miniprogram/utils/store";
import { WxRouter } from "../miniprogram/utils/router";
import { MiniProgram, Plugin, WXUserInfo, GetUserInfoSuccessCallback } from "../miniprogram/models/wxModels";


interface IAppOption {
  fetchApi?: ApiFetch,
  store?: WxStorage,
  router?: WxRouter,
  miniProgramInfo?: MiniProgram,
  pluginInfo?: Plugin,
  globalData: {
    userInfo?: WXUserInfo,
    isIpx?: boolean;
    statusBarHeight?: number;
    navBarHeight?: number;
    theme?: string;
  }
  userInfoReadyCallback?: GetUserInfoSuccessCallback,

  themeChanged?: Function,

  watchThemeChange?: Function,

  unWatchThemeChange?: Function,
}

interface WXTriggerEvent {
  detail?: AnyObject,
  currentTarget?: EventTarget
}

interface EventTarget {
  dataset: AnyObject
}

