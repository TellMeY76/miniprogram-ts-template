module.exports = {
    data: {
        theme: '',
    },
    themeChanged(theme: string) {
        this.setData({
            theme,
        });
    },
    onLoad() {
        const app = getApp();
        const theme = app.globalData.theme;
        this.themeChanged(theme);
        app.watchThemeChange(this.themeChanged);
        console.log(this.data.theme)

    },
    onUnload() {
        getApp().unWatchThemeChange(this.themeChanged);
    },
};