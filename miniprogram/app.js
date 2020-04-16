"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchApi_1 = require("./utils/fetchApi");
const store_1 = require("./utils/store");
const router_1 = require("./utils/router");
require("./libs/Mixins.js");
const themeListeners = [];
App({
    fetchApi: fetchApi_1.fetchApi,
    store: store_1.store,
    router: router_1.router,
    miniProgramInfo: wx.getAccountInfoSync().miniProgram,
    globalData: {
        isIpx: false,
        statusBarHeight: 0,
        navBarHeight: 0,
        theme: "default"
    },
    onLaunch() {
        const _this = this;
        wx.getSystemInfo({
            success: function(res) {
                _this.globalData.statusBarHeight = res.statusBarHeight;
                _this.globalData.navBarHeight = 44 + res.statusBarHeight;
                const iphoneNormalProp = 1.78;
                if (res.platform === "ios" && res.windowHeight / res.windowWidth > iphoneNormalProp) {
                    _this.globalData.isIpx = true;
                }
            }
        });
    },
    onError(errMsg) {
        console.log("错误提醒：", errMsg);
    },
    themeChanged(theme) {
        this.globalData.theme = theme;
        themeListeners.forEach(listener => {
            listener(theme);
        });
    },
    watchThemeChange(listener) {
        if (themeListeners.indexOf(listener) < 0) {
            themeListeners.push(listener);
        }
    },
    unWatchThemeChange(listener) {
        const index = themeListeners.indexOf(listener);
        if (index > -1) {
            themeListeners.splice(index, 1);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTRDO0FBQzVDLHlDQUFzQztBQUN0QywyQ0FBd0M7QUFHeEMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDNUIsTUFBTSxjQUFjLEdBQWUsRUFBRSxDQUFDO0FBRXRDLEdBQUcsQ0FBYTtJQUNkLFFBQVEsRUFBRSxtQkFBUTtJQUNsQixLQUFLLEVBQUUsYUFBSztJQUNaLE1BQU0sRUFBRSxlQUFNO0lBQ2QsZUFBZSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLFdBQVc7SUFFcEQsVUFBVSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEtBQUs7UUFDWixlQUFlLEVBQUUsQ0FBQztRQUNsQixZQUFZLEVBQUUsQ0FBQztRQUNmLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0lBQ0QsUUFBUTtRQUNOLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQztRQUVuQixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFFLFVBQVUsR0FBcUI7Z0JBQ3RDLEtBQUssQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxlQUFlLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDO2dCQUN6RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFDOUIsSUFDRSxHQUFHLENBQUMsUUFBUSxLQUFLLEtBQUs7b0JBQ3RCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsRUFDckQ7b0JBQ0EsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUMvQjtZQUNILENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLE1BQWM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM5QixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWtCO1FBQ2pDLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxRQUFrQjtRQUNuQyxNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2QsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hBcGkgfSBmcm9tIFwiLi91dGlscy9mZXRjaEFwaVwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi91dGlscy9zdG9yZVwiO1xuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSBcIi4vdXRpbHMvcm91dGVyXCI7XG5pbXBvcnQgeyBJQXBwT3B0aW9uIH0gZnJvbSBcIi4uL3R5cGluZ3NcIjtcbmltcG9ydCB7IEdldFN5c3RlbUluZm9SZXMgfSBmcm9tIFwiLi9tb2RlbHMvd3hNb2RlbHNcIjtcbnJlcXVpcmUoJy4vbGlicy9NaXhpbnMuanMnKTtcbmNvbnN0IHRoZW1lTGlzdGVuZXJzOiBGdW5jdGlvbltdID0gW107XG5cbkFwcDxJQXBwT3B0aW9uPih7XG4gIGZldGNoQXBpOiBmZXRjaEFwaSxcbiAgc3RvcmU6IHN0b3JlLFxuICByb3V0ZXI6IHJvdXRlcixcbiAgbWluaVByb2dyYW1JbmZvOiB3eC5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbSxcbiAgLy8gcGx1Z2luSW5mbzogd3guZ2V0QWNjb3VudEluZm9TeW5jKCkucGx1Z2luLFxuICBnbG9iYWxEYXRhOiB7XG4gICAgaXNJcHg6IGZhbHNlLFxuICAgIHN0YXR1c0JhckhlaWdodDogMCxcbiAgICBuYXZCYXJIZWlnaHQ6IDAsXG4gICAgdGhlbWU6ICdkZWZhdWx0JyxcbiAgfSxcbiAgb25MYXVuY2goKSB7XG4gICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzOiBHZXRTeXN0ZW1JbmZvUmVzKSB7XG4gICAgICAgIF90aGlzLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0ID0gcmVzLnN0YXR1c0JhckhlaWdodDtcbiAgICAgICAgX3RoaXMuZ2xvYmFsRGF0YS5uYXZCYXJIZWlnaHQgPSA0NCArIHJlcy5zdGF0dXNCYXJIZWlnaHQ7XG4gICAgICAgIGNvbnN0IGlwaG9uZU5vcm1hbFByb3AgPSAxLjc4O1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcmVzLnBsYXRmb3JtID09PSBcImlvc1wiICYmXG4gICAgICAgICAgcmVzLndpbmRvd0hlaWdodCAvIHJlcy53aW5kb3dXaWR0aCA+IGlwaG9uZU5vcm1hbFByb3BcbiAgICAgICAgKSB7XG4gICAgICAgICAgX3RoaXMuZ2xvYmFsRGF0YS5pc0lweCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBvbkVycm9yKGVyck1zZzogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ+mUmeivr+aPkOmGku+8micsIGVyck1zZyk7XG4gIH0sXG5cbiAgdGhlbWVDaGFuZ2VkKHRoZW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmdsb2JhbERhdGEudGhlbWUgPSB0aGVtZTtcbiAgICB0aGVtZUxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgbGlzdGVuZXIodGhlbWUpO1xuICAgIH0pO1xuICB9LFxuXG4gIHdhdGNoVGhlbWVDaGFuZ2UobGlzdGVuZXI6IEZ1bmN0aW9uKSB7XG4gICAgaWYgKHRoZW1lTGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpIDwgMCkge1xuICAgICAgdGhlbWVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuXG4gIHVuV2F0Y2hUaGVtZUNoYW5nZShsaXN0ZW5lcjogRnVuY3Rpb24pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoZW1lTGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGVtZUxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfSxcbn0pIl19
