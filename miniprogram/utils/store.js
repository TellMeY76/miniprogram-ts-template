"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WxStorage {
    setItem(key, val) {
        try {
            wx.setStorageSync(key, val);
        } catch (e) {
            wx.setStorage({
                key: key,
                data: val
            });
        }
    }
    getItem(key) {
        return wx.getStorageSync(key);
    }
    clear(key) {
        key ? wx.removeStorageSync(key) : wx.clearStorageSync();
    }
}
exports.WxStorage = WxStorage;
const store = new WxStorage();
exports.store = store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sU0FBUztJQUNiLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBUTtRQUMzQixJQUFJO1lBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLEdBQUc7YUFDVixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFZO1FBQ2hCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0NBQ0Y7QUFHUSw4QkFBUztBQURsQixNQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ1Ysc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXeFN0b3JhZ2Uge1xyXG4gIHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbDogYW55KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB3eC5zZXRTdG9yYWdlU3luYyhrZXksIHZhbCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHd4LnNldFN0b3JhZ2Uoe1xyXG4gICAgICAgIGtleToga2V5LFxyXG4gICAgICAgIGRhdGE6IHZhbFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYyhrZXkpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoa2V5Pzogc3RyaW5nKSB7XHJcbiAgICBrZXkgPyB3eC5yZW1vdmVTdG9yYWdlU3luYyhrZXkpIDogd3guY2xlYXJTdG9yYWdlU3luYygpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RvcmUgPSBuZXcgV3hTdG9yYWdlKCk7XHJcbmV4cG9ydCB7IFd4U3RvcmFnZSwgc3RvcmUgfTtcclxuIl19
