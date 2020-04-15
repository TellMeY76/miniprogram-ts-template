Component({
  options: {
    addGlobalClass: true
  },

  properties: {
    show: {
      type: Boolean,
      value: false
    },
    height: {
      type: String,
      value: "80%"
    },
    width: {
      type: String,
      value: "82%"
    },
    bgTp: {
      type: Boolean,
      value: false
    },
    showClose: {
      type: Boolean,
      value: true
    }
  },

  data: {},

  methods: {
    closeModel() {
      this.setData({
        show: false
      });
      this.triggerEvent("close");
    }
  }
});
