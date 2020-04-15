"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const detectUpdate = () => {
    const updateManager = wx.getUpdateManager();
    updateManager.onUpdateReady(function() {
        wx.showModal({
            title: "更新提示",
            content: "新版本已就绪，重启小程序立刻体验？",
            success: function(res) {
                if (res.confirm) {
                    updateManager.applyUpdate();
                }
            }
        });
    });
};
exports.detectUpdate = detectUpdate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXBkYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxZQUFZLEdBQUcsR0FBRyxFQUFFO0lBQ3RCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVDLGFBQWEsQ0FBQyxhQUFhLENBQUM7UUFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNULEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLG1CQUFtQjtZQUM1QixPQUFPLEVBQUUsVUFBVSxHQUFHO2dCQUNsQixJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7b0JBQ2IsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUMvQjtZQUNMLENBQUM7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVPLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGV0ZWN0VXBkYXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuICAgIHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi5pu05paw5o+Q56S6XCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi5paw54mI5pys5bey5bCx57uq77yM6YeN5ZCv5bCP56iL5bqP56uL5Yi75L2T6aqM77yfXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkZXRlY3RVcGRhdGUgfSJdfQ==
