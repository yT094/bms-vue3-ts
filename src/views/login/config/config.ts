// 用于存储常量，如校验规则等
export const rules = {
  account: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5-10个数字或者字母",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: "密码必须是3位以上的字母或者数字",
      trigger: "blur",
    },
  ],
};

export const phoneRules = {
  phone: [
    {
      required: true,
      message: "请输入手机号",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]$/,
      message: "手机号必须是数字",
      trigger: "blur",
    },
  ],
  verificationCode: [
    {
      required: true,
      message: "请输入验证码",
      trigger: "blur",
    },
  ],
};
