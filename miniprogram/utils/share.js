"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shareParam = function(userInfo, corpId, shareSucFn, shareFailFn) {
    const sharerId = userInfo ? userInfo["id"] : "";
    const sharerCorp = corpId || "";
    const path = `/pages/loading/loading?sharerId=${sharerId}&shareCorp=${sharerCorp}`;
    return {
        title: "疫情帮扶政策，你符合吗？<一秒自查>",
        path: path,
        imageUrl: "/assets/img/share_banner_v4.png",
        success: function() {
            shareSucFn ? shareSucFn() : null;
        },
        fail: function() {
            shareFailFn ? shareFailFn() : null;
        }
    };
};
exports.shareParam = shareParam;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaGFyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sVUFBVSxHQUFHLFVBQVUsUUFBYyxFQUFFLE1BQWUsRUFBRSxVQUFxQixFQUFFLFdBQXNCO0lBQ3ZHLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxNQUFNLElBQUksR0FBRyxtQ0FBbUMsUUFBUSxjQUFjLFVBQVUsRUFBRSxDQUFDO0lBQ25GLE9BQU87UUFDSCxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLGlDQUFpQztRQUMzQyxPQUFPLEVBQUU7WUFDTCxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDcEMsQ0FBQztRQUNELElBQUksRUFBRTtZQUNGLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtRQUN0QyxDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVPLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hhcmVQYXJhbSA9IGZ1bmN0aW9uICh1c2VySW5mbz86IGFueSwgY29ycElkPzogc3RyaW5nLCBzaGFyZVN1Y0ZuPzogRnVuY3Rpb24sIHNoYXJlRmFpbEZuPzogRnVuY3Rpb24pIHtcclxuICAgIGNvbnN0IHNoYXJlcklkID0gdXNlckluZm8gPyB1c2VySW5mb1tcImlkXCJdIDogXCJcIjtcclxuICAgIGNvbnN0IHNoYXJlckNvcnAgPSBjb3JwSWQgfHwgXCJcIjtcclxuICAgIGNvbnN0IHBhdGggPSBgL3BhZ2VzL2xvYWRpbmcvbG9hZGluZz9zaGFyZXJJZD0ke3NoYXJlcklkfSZzaGFyZUNvcnA9JHtzaGFyZXJDb3JwfWA7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBcIueWq+aDheW4ruaJtuaUv+etlu+8jOS9oOespuWQiOWQl++8nzzkuIDnp5Loh6rmn6U+XCIsXHJcbiAgICAgICAgcGF0aDogcGF0aCxcclxuICAgICAgICBpbWFnZVVybDogXCIvYXNzZXRzL2ltZy9zaGFyZV9iYW5uZXJfdjQucG5nXCIsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzaGFyZVN1Y0ZuID8gc2hhcmVTdWNGbigpIDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzaGFyZUZhaWxGbiA/IHNoYXJlRmFpbEZuKCkgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHNoYXJlUGFyYW0gfSJdfQ==
