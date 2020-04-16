"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    mixins: [require("../../mixin/themeChanged"), require("../../mixin/onShareMsg")],
    data: {
        dialogShow: false,
        buttons: [{ text: "取消", type: "close" }, { text: "确定", type: "confirm" }],
        share: {}
    },
    onLoad() {},
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksQ0FBQztJQUNILE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2hGLElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUN6RSxLQUFLLEVBQUUsRUFBRTtLQUNWO0lBRUQsTUFBTSxLQUFJLENBQUM7SUFFWCxpQkFBaUI7UUFDZixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELGVBQWUsQ0FBQyxDQUFpQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXWFRyaWdnZXJFdmVudCB9IGZyb20gXCIuLi8uLi8uLi90eXBpbmdzXCJcclxuXHJcblBhZ2Uoe1xyXG4gIG1peGluczogW3JlcXVpcmUoJy4uLy4uL21peGluL3RoZW1lQ2hhbmdlZCcpLCByZXF1aXJlKCcuLi8uLi9taXhpbi9vblNoYXJlTXNnJyldLFxyXG4gIGRhdGE6IHtcclxuICAgIGRpYWxvZ1Nob3c6IGZhbHNlLFxyXG4gICAgYnV0dG9uczogW3sgdGV4dDogJ+WPlua2iCcsIHR5cGU6ICdjbG9zZScgfSwgeyB0ZXh0OiAn56Gu5a6aJywgdHlwZTogJ2NvbmZpcm0nIH1dLFxyXG4gICAgc2hhcmU6IHt9LFxyXG4gIH0sXHJcblxyXG4gIG9uTG9hZCgpIHt9LFxyXG5cclxuICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGEuc2hhcmU7XHJcbiAgfSxcclxuICBzaG93TW9kYWw6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgIGRpYWxvZ1Nob3c6IHRydWVcclxuICAgIH0pXHJcbiAgfSxcclxuICB0YXBEaWFsb2dCdXR0b24oZTogV1hUcmlnZ2VyRXZlbnQpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBkaWFsb2dTaG93OiBmYWxzZSxcclxuICAgIH0pXHJcbiAgfSxcclxufSkiXX0=
