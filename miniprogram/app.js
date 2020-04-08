"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchApi_1 = require("./utils/fetchApi");
const store_1 = require("./utils/store");
const router_1 = require("./utils/router");
App({
    fetchApi: fetchApi_1.fetchApi,
    store: store_1.store,
    router: router_1.router,
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
            success: function (res) {
                _this.globalData.statusBarHeight = res.statusBarHeight;
                _this.globalData.navBarHeight = 44 + res.statusBarHeight;
                const iphoneNormalProp = 1.78;
                if (res.platform === "ios" &&
                    res.windowHeight / res.windowWidth > iphoneNormalProp) {
                    _this.globalData.isIpx = true;
                }
            }
        });
    },
    onError(errMsg) {
        console.log('错误提醒：', errMsg);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTRDO0FBQzVDLHlDQUFzQztBQUN0QywyQ0FBd0M7QUFFeEMsR0FBRyxDQUFhO0lBQ2QsUUFBUSxFQUFFLG1CQUFRO0lBQ2xCLEtBQUssRUFBRSxhQUFLO0lBQ1osTUFBTSxFQUFFLGVBQU07SUFDZCxlQUFlLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsV0FBVztJQUNwRCxVQUFVLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTTtJQUMxQyxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsS0FBSztRQUNaLGVBQWUsRUFBRSxDQUFDO1FBQ2xCLFlBQVksRUFBRSxDQUFDO0tBQ2hCO0lBQ0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUVuQixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQVUsR0FBOEM7Z0JBQy9ELEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO2dCQUN6RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDOUIsSUFDRSxHQUFHLENBQUMsUUFBUSxLQUFLLEtBQUs7b0JBQ3RCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsRUFDckQ7b0JBQ0EsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUMvQjtZQUNILENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQXBpIH0gZnJvbSBcIi4vdXRpbHMvZmV0Y2hBcGlcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4vdXRpbHMvc3RvcmVcIjtcbmltcG9ydCB7IHJvdXRlciB9IGZyb20gXCIuL3V0aWxzL3JvdXRlclwiO1xuXG5BcHA8SUFwcE9wdGlvbj4oe1xuICBmZXRjaEFwaTogZmV0Y2hBcGksXG4gIHN0b3JlOiBzdG9yZSxcbiAgcm91dGVyOiByb3V0ZXIsXG4gIG1pbmlQcm9ncmFtSW5mbzogd3guZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0sXG4gIHBsdWdpbkluZm86IHd4LmdldEFjY291bnRJbmZvU3luYygpLnBsdWdpbixcbiAgZ2xvYmFsRGF0YToge1xuICAgIGlzSXB4OiBmYWxzZSxcbiAgICBzdGF0dXNCYXJIZWlnaHQ6IDAsXG4gICAgbmF2QmFySGVpZ2h0OiAwXG4gIH0sXG4gIG9uTGF1bmNoKCkge1xuICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlczogV2VjaGF0TWluaXByb2dyYW0uR2V0U3lzdGVtSW5mb1N5bmNSZXN1bHQpIHtcbiAgICAgICAgX3RoaXMuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICBfdGhpcy5nbG9iYWxEYXRhLm5hdkJhckhlaWdodCA9IDQ0ICsgcmVzLnN0YXR1c0JhckhlaWdodDtcbiAgICAgICAgY29uc3QgaXBob25lTm9ybWFsUHJvcCA9IDEuNzg7XG4gICAgICAgIGlmIChcbiAgICAgICAgICByZXMucGxhdGZvcm0gPT09IFwiaW9zXCIgJiZcbiAgICAgICAgICByZXMud2luZG93SGVpZ2h0IC8gcmVzLndpbmRvd1dpZHRoID4gaXBob25lTm9ybWFsUHJvcFxuICAgICAgICApIHtcbiAgICAgICAgICBfdGhpcy5nbG9iYWxEYXRhLmlzSXB4ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIG9uRXJyb3IoZXJyTXNnOiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygn6ZSZ6K+v5o+Q6YaS77yaJywgZXJyTXNnKTtcbiAgfVxufSkiXX0=