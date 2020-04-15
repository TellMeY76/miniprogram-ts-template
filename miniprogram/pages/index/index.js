"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Page({
    mixins: [require("../../mixin/themeChanged")],
    data: {
        dialogShow: false,
        buttons: [{ text: "取消", type: "close" }, { text: "确定", type: "confirm" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUksQ0FBQztJQUNILE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQzdDLElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztLQUMxRTtJQUNELFNBQVMsRUFBRTtRQUNULElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsZUFBZSxDQUFDLENBQWlCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdYVHJpZ2dlckV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGluZ3NcIlxyXG5cclxuUGFnZSh7XHJcbiAgbWl4aW5zOiBbcmVxdWlyZSgnLi4vLi4vbWl4aW4vdGhlbWVDaGFuZ2VkJyldLFxyXG4gIGRhdGE6IHtcclxuICAgIGRpYWxvZ1Nob3c6IGZhbHNlLFxyXG4gICAgYnV0dG9uczogW3sgdGV4dDogJ+WPlua2iCcsIHR5cGU6ICdjbG9zZScgfSwgeyB0ZXh0OiAn56Gu5a6aJywgdHlwZTogJ2NvbmZpcm0nIH1dLFxyXG4gIH0sXHJcbiAgc2hvd01vZGFsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBkaWFsb2dTaG93OiB0cnVlXHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgdGFwRGlhbG9nQnV0dG9uKGU6IFdYVHJpZ2dlckV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgZGlhbG9nU2hvdzogZmFsc2UsXHJcbiAgICB9KVxyXG4gIH0sXHJcbn0pIl19
