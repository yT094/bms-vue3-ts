<template>
  <div class="login-phone">
    <el-form :model="ruleForm" :rules="phoneRules">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="verificationCode">
        <div class="e-getcode">
          <el-input v-model="ruleForm.verificationCode"></el-input>
          <el-button type="primary" class="ml15">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { phoneRules } from "../config/config";

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      phone: "",
      verificationCode: "",
    });
    return { ruleForm, phoneRules };
  },
});
</script>

<style lang="less" scoped>
.login-phone {
  .e-getcode {
    display: flex;
    justify-content: space-between;
  }
}
</style>
