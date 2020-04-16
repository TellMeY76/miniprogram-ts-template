"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    mixins: [require("../../mixin/themeChanged"), require("../../mixin/onShareMsg")],
    data: {
        dialogShow: false,
        buttons: [{ text: "取消", type: "close" }, { text: "确定", type: "confirm" }],
        share: {}
    },
    onLoad() {
        console.log("page onLoad");
    },
    onShareAppMessage() {
        return this.data.share;
    },
    showModal: function() {
        this.setData({
            dialogShow: true
        });
    },
    tapDialogButton(e) {
        console.log(e);
        this.setData({
            dialogShow: false
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksQ0FBQztJQUNILE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hGLElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN6RSxLQUFLLEVBQUUsRUFBRTtLQUNWO0lBQ0QsTUFBTTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUNELFNBQVMsRUFBRTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsZUFBZSxDQUFDLENBQWlCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdYVHJpZ2dlckV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGluZ3NcIlxyXG5cclxuUGFnZSh7XHJcbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi4vLi4vbWl4aW4vdGhlbWVDaGFuZ2VkJyksIHJlcXVpcmUoJy4uLy4uL21peGluL29uU2hhcmVNc2cnKV0sXHJcbiAgZGF0YToge1xyXG4gICAgZGlhbG9nU2hvdzogZmFsc2UsXHJcbiAgICBidXR0b25zOiBbeyB0ZXh0OiAn5Y+W5raIJywgdHlwZTogJ2Nsb3NlJyB9LCB7IHRleHQ6ICfnoa7lrponLCB0eXBlOiAnY29uZmlybScgfV0sXHJcbiAgICBzaGFyZToge30sXHJcbiAgfSxcclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygncGFnZSBvbkxvYWQnKTtcclxuICB9LFxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YS5zaGFyZTtcclxuICB9LFxyXG4gIHNob3dNb2RhbDogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZGlhbG9nU2hvdzogdHJ1ZVxyXG4gICAgfSlcclxuICB9LFxyXG4gIHRhcERpYWxvZ0J1dHRvbihlOiBXWFRyaWdnZXJFdmVudCkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGRpYWxvZ1Nob3c6IGZhbHNlLFxyXG4gICAgfSlcclxuICB9LFxyXG59KSJdfQ==
