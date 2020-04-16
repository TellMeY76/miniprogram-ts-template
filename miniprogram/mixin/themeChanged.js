"use strict";
module.exports = {
    data: {
        theme: ""
    },
    themeChanged(theme) {
        this.setData({
            theme
        });
    },
    onLoad() {
        const app = getApp();
        const theme = app.globalData.theme;
        this.themeChanged(theme);
        app.watchThemeChange(this.themeChanged);
    },
    onUnload() {
        getApp().unWatchThemeChange(this.themeChanged);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWVDaGFuZ2VkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGhlbWVDaGFuZ2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2IsSUFBSSxFQUFFO1FBQ0YsS0FBSyxFQUFFLEVBQUU7S0FDWjtJQUNELFlBQVksQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDVCxLQUFLO1NBQ1IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELE1BQU07UUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNyQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELFFBQVE7UUFDSixNQUFNLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB0aGVtZTogJycsXHJcbiAgICB9LFxyXG4gICAgdGhlbWVDaGFuZ2VkKHRoZW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICB0aGVtZSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcbiAgICAgICAgY29uc3QgdGhlbWUgPSBhcHAuZ2xvYmFsRGF0YS50aGVtZTtcclxuICAgICAgICB0aGlzLnRoZW1lQ2hhbmdlZCh0aGVtZSk7XHJcbiAgICAgICAgYXBwLndhdGNoVGhlbWVDaGFuZ2UodGhpcy50aGVtZUNoYW5nZWQpO1xyXG4gICAgfSxcclxuICAgIG9uVW5sb2FkKCkge1xyXG4gICAgICAgIGdldEFwcCgpLnVuV2F0Y2hUaGVtZUNoYW5nZSh0aGlzLnRoZW1lQ2hhbmdlZCk7XHJcbiAgICB9LFxyXG59OyJdfQ==
