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
const router = new WxRouter();
exports.router = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxRQUFRO0lBQ1osRUFBRSxDQUFDLEdBQVcsRUFBRSxJQUFhO1FBQzNCLE1BQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDckIsUUFBUSxJQUFJLEVBQUU7WUFDWixLQUFLLFVBQVU7Z0JBQ2IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsTUFBTTtZQUNSLEtBQUssVUFBVTtnQkFDYixFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLE1BQU07WUFDUjtnQkFDRSxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFnQjtRQUNuQixNQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFDRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ3JCLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV3hSb3V0ZXIge1xyXG4gIHRvKHVybDogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwYXRoID0geyB1cmwgfTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwicmVMYXVuY2hcIjpcclxuICAgICAgICB3eC5yZUxhdW5jaChwYXRoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInJlZGlyZWN0XCI6XHJcbiAgICAgICAgd3gucmVkaXJlY3RUbyhwYXRoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcInRhYlwiOlxyXG4gICAgICAgIHd4LnN3aXRjaFRhYihwYXRoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHBhdGgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmFjayhwYWdlTnVtPzogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBkZWx0YSA9IHBhZ2VOdW0gfHwgMTtcclxuICAgIGNvbnN0IHBhdGggPSB7IGRlbHRhIH07XHJcbiAgICB3eC5uYXZpZ2F0ZUJhY2socGF0aCk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IHJvdXRlciA9IG5ldyBXeFJvdXRlcigpO1xyXG5leHBvcnQgeyByb3V0ZXIgfTtcclxuIl19