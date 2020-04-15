import { FormRules, FormError } from "../../models/form";

Component({

  properties: {
    formData: Object,
    rules: Array
  },

  attached() {
    const rules: FormRules[] = [{
      name: 'radio',
      rules: { required: true, message: '单选列表是必选项' },
    }, {
      name: 'checkbox',
      rules: { required: true, message: '多选列表是必选项' },
    }, {
      name: 'qq',
      rules: { required: true, message: 'qq必填' },
    }, {
      name: 'mobile',
      rules: [{ required: true, message: 'mobile必填' }, { mobile: true, message: 'mobile格式不对' }],
    }, {
      name: 'vcode',
      rules: { required: true, message: '验证码必填' },
    }, {
      name: 'idcard',
      rules: { required: true, message: 'idcard必填' },
    }];

    this.setData({ rules })
  },

  data: {
    error: ''
  },

  methods: {
    submitForm() {
      const formComponent = this.selectComponent('#form');
      formComponent.validate((valid: string, errors: FormError[]) => {
        if (!valid) {
          const firstErr: string[] = Object.keys(errors)
          if (firstErr.length) {
            const firstErrIdx: number = parseInt(firstErr[0])
            this.setData({
              error: errors[firstErrIdx]?.message
            })
          }
        } else {
          this.setData({
            error: ''
          })
        }
      })
    }
  }
})
