import { WXTriggerEvent } from "../../../typings"

Page({
  mixins: [require('../../mixin/themeChanged')],
  data: {
    dialogShow: false,
    buttons: [{ text: '取消', type: 'close' }, { text: '确定', type: 'confirm' }],
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