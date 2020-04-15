class WxStorage {
  setItem(key: string, val: any) {
    try {
      wx.setStorageSync(key, val);
    } catch (e) {
      wx.setStorage({
        key: key,
        data: val
      });
    }
  }

  getItem(key: string) {
    return wx.getStorageSync(key);
  }

  clear(key?: string) {
    key ? wx.removeStorageSync(key) : wx.clearStorageSync();
  }
}

const store = new WxStorage();
export { WxStorage, store };
