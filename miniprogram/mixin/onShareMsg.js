"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const share_1 = require("../utils/share");
module.exports = {
    data: {
        share: {
            title: "shareTitle",
            path: "/pages/index/index",
            imageUrl: "",
            success: () => {},
            fail: () => {}
        }
    },
    onLoad() {
        const share = share_1.setShareParam();
        this.setData({ share });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25TaGFyZU1zZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9uU2hhcmVNc2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBK0M7QUFJL0MsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLElBQUksRUFBRTtRQUNGLEtBQUssRUFBRTtZQUNILEtBQUssRUFBRSxZQUFZO1lBQ25CLElBQUksRUFBRSxvQkFBb0I7WUFDMUIsUUFBUSxFQUFFLEVBQUU7WUFDWixPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNsQixJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNsQjtLQUNKO0lBRUQsTUFBTTtRQUNGLE1BQU0sS0FBSyxHQUFVLHFCQUFhLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUMzQixDQUFDO0NBRUosQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldFNoYXJlUGFyYW0gfSBmcm9tIFwiLi4vdXRpbHMvc2hhcmVcIjtcclxuXHJcbmltcG9ydCB7IFNoYXJlIH0gZnJvbSBcIi4uL21vZGVscy9zaGFyZVwiO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgc2hhcmU6IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdzaGFyZVRpdGxlJyxcclxuICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleC9pbmRleCcsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOiAnJyxcclxuICAgICAgICAgICAgc3VjY2VzczogKCkgPT4geyB9LFxyXG4gICAgICAgICAgICBmYWlsOiAoKSA9PiB7IH1cclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2hhcmU6IFNoYXJlID0gc2V0U2hhcmVQYXJhbSgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHNoYXJlIH0pXHJcbiAgICB9LFxyXG5cclxufTsiXX0=
