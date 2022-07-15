export const usernameRules = [
  { required: true, message: '请填写账号' },
  {
    pattern: /^[\w]{5,8}/,
    message: '用户名格式5-8位的字母和数字'
  }
]
export const codeRules = [
  { required: true, message: '请填写密码' },
  {
    pattern: /^[\w]{5,12}/,
    message: '密码格式5-12位的字母和数字'
  }
]
