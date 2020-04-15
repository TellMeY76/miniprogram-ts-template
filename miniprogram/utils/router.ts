class WxRouter {
  to(url: string, type?: string) {
    const path = { url };
    switch (type) {
      case "reLaunch":
        wx.reLaunch(path);
        break;
      case "redirect":
        wx.redirectTo(path);
        break;
      case "tab":
        wx.switchTab(path);
        break;
      default:
        wx.navigateTo(path);
    }
  }

  back(pageNum?: number) {
    const delta = pageNum || 1;
    const path = { delta };
    wx.navigateBack(path);
  }
}
const router = new WxRouter();
export { WxRouter, router };
