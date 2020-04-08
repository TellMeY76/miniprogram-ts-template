interface RegObj {
  rule: RegExp;
  msg: string;
}

interface Validator {
  [key: string]: RegObj;
}

interface FormFld {
  name: string;
  val: string;
  validator: string;
}

interface ValidateForm {
  dirty: boolean;
  invalidMsg: string;
  [key: string]: any;
}

const validators: Validator = {
  required: {
    rule: /.+/,
    msg: "此项不能为空！"
  },
  phone: {
    rule: /^1(3|4|5|7|8)\d{9}$/,
    msg: "手机号格式不正确！"
  },
  code: {
    rule: /^\d{4}$/,
    msg: "验证码格式不正确！"
  }
};

// 表单字段校验
const validate = (formFld: FormFld, that: any) => {
  if (formFld.name) {
    const validateForm = that.data.validateForm || {};
    const name = formFld.name;
    const value = (formFld.val || "").trim();
    const validator = formFld.validator ? formFld.validator.split(",") : [];
    for (let i = 0; i < validator.length; i++) {
      const ruleName = validator[i].split("=")[0];
      const rule = validators[ruleName].rule || /.*/;
      validateForm[name] = rule.test(value) ? "" : validators[ruleName].msg;
      if (validateForm[name]) break;
    }
    setValidateForm(validateForm, that);
  } else {
    console.error("表单字段名缺失");
  }
};

// 表单必填项校验
const validateRequired = (prop: string[], that: any) => {
  const validateForm = that.data.validateForm;
  prop.forEach(item => {
    if (!validators.required.rule.test(that.data.form[item]["val"] || "")) {
      validateForm[item] = validators.required.msg;
    }
  });
  setValidateForm(validateForm, that);
};

const setValidateForm = (validateForm: ValidateForm, that: any) => {
  validateForm["dirty"] = true;
  validateForm["invalidMsg"] = "";
  for (let fld in validateForm) {
    if (fld !== "invalidMsg" && fld !== "dirty") {
      validateForm["invalidMsg"] = validateForm[fld].trim()
        ? validateForm[fld]
        : validateForm["invalidMsg"];
    }
  }
  that.setData({
    validateForm
  });
};

export { validate, validateRequired };
