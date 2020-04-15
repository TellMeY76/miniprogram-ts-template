const detectUpdate = () => {
    const updateManager = wx.getUpdateManager();
    updateManager.onUpdateReady(function () {
        wx.showModal({
            title: "更新提示",
            content: "新版本已就绪，重启小程序立刻体验？",
            success: function (res) {
                if (res.confirm) {
                    updateManager.applyUpdate();
                }
            }
        });
    });
};

export { detectUpdate }