<template>
  <div class="login-account">
    <el-form label-width="60px" :model="ruleForm" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ElForm } from "element-plus";
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/config";
import localCache from "@/utils/cache";

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      account: localCache.getCache("account") ?? "",
      password: localCache.getCache("password") ?? "",
    });

    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        console.log("valid", valid);
        if (valid) {
          // 1.处理 记住密码
          if (isKeepPassword) {
            localCache.setCache("account", ruleForm.account);
            localCache.setCache("password", ruleForm.password);
          } else {
            localCache.deleteCache("account");
            localCache.deleteCache("password");
          }
          console.log("账户登录: 校验通过, 发送登录请求~");
        }
      });
    };
    return { ruleForm, rules, formRef, loginAction };
  },
});
</script>

<style lang="less" scoped></style>
