import { WXTriggerEvent } from "../../../typings"

Page({
  mixins: [require('../../mixin/themeChanged'), require('../../mixin/onShareMsg')],
  data: {
    dialogShow: false,
    buttons: [{ text: '取消', type: 'close' }, { text: '确定', type: 'confirm' }],
    share: {},
  },

  onLoad() {},

  onShareAppMessage() {
    return this.data.share;
  },
  showModal: function () {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e: WXTriggerEvent) {
    console.log(e)
    this.setData({
      dialogShow: false,
    })
  },
})