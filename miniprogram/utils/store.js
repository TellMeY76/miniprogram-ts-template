"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WxStorage {
    setItem(key, val) {
        try {
            wx.setStorageSync(key, val);
        }
        catch (e) {
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
const store = new WxStorage();
exports.store = store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sU0FBUztJQUNiLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBUTtRQUMzQixJQUFJO1lBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDN0I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsSUFBSSxFQUFFLEdBQUc7YUFDVixDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELEtBQUssQ0FBQyxHQUFZO1FBQ2hCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ3JCLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV3hTdG9yYWdlIHtcclxuICBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWw6IGFueSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgd3guc2V0U3RvcmFnZVN5bmMoa2V5LCB2YWwpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICBkYXRhOiB2YWxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoa2V5KTtcclxuICB9XHJcblxyXG4gIGNsZWFyKGtleT86IHN0cmluZykge1xyXG4gICAga2V5ID8gd3gucmVtb3ZlU3RvcmFnZVN5bmMoa2V5KSA6IHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFd4U3RvcmFnZSgpO1xyXG5leHBvcnQgeyBzdG9yZSB9O1xyXG4iXX0=