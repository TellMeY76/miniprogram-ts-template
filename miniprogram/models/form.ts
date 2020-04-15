interface FormRules {
  name: string,
  rules: Rule | Rule[],
}

interface Rule {
  name?: string,
  message?: string,
  validator?: void,
  required?: boolean,
  minlength?: number,
  maxlength?: number,
  rangelength?: [number, number],
  bytelength?: number,
  range?: [number, number],
  min?: number,
  max?: number,
  mobile?: boolean,
  email?: boolean,
  url?: boolean,
  equalTo?: string
}


interface FormError {
  message: string,
  name: string,
  rule: Rule
}

export { FormRules, FormError }