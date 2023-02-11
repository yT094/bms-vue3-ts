<template>
  <div class="login-account">
    <el-form label-width="60px" :model="ruleForm" :rules="rules">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { rules } from "../config/config";

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      account: "",
      password: "",
    });
    return { ruleForm, rules };
  },
});
</script>

<style lang="less" scoped></style>
