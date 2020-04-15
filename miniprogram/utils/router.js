"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WxRouter {
    to(url, type) {
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
    back(pageNum) {
        const delta = pageNum || 1;
        const path = { delta };
        wx.navigateBack(path);
    }
}
exports.WxRouter = WxRouter;
const router = new WxRouter();
exports.router = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxRQUFRO0lBQ1osRUFBRSxDQUFDLEdBQVcsRUFBRSxJQUFhO1FBQzNCLE1BQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDckIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFVBQVU7Z0JBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDUjtnQkFDRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFnQjtRQUNuQixNQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFFUSw0QkFBUTtBQURqQixNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ1gsd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXeFJvdXRlciB7XHJcbiAgdG8odXJsOiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhdGggPSB7IHVybCB9O1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJyZUxhdW5jaFwiOlxyXG4gICAgICAgIHd4LnJlTGF1bmNoKHBhdGgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicmVkaXJlY3RcIjpcclxuICAgICAgICB3eC5yZWRpcmVjdFRvKHBhdGgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwidGFiXCI6XHJcbiAgICAgICAgd3guc3dpdGNoVGFiKHBhdGgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8ocGF0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiYWNrKHBhZ2VOdW0/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGRlbHRhID0gcGFnZU51bSB8fCAxO1xyXG4gICAgY29uc3QgcGF0aCA9IHsgZGVsdGEgfTtcclxuICAgIHd4Lm5hdmlnYXRlQmFjayhwYXRoKTtcclxuICB9XHJcbn1cclxuY29uc3Qgcm91dGVyID0gbmV3IFd4Um91dGVyKCk7XHJcbmV4cG9ydCB7IFd4Um91dGVyLCByb3V0ZXIgfTtcclxuIl19
