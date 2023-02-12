<template>
  <div class="login-panel">
    <h1 class="l-title">后台管理系统</h1>
    <el-tabs type="border-card" v-model="activeName" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录</span>
        </template>
        <LoginAccount ref="accountRef"></LoginAccount>
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录</span>
        </template>
        <LoginPhone></LoginPhone>
      </el-tab-pane>
    </el-tabs>

    <div class="l-other">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <div class="l-login-btn">
      <el-button type="primary" @click="handleBtnClick" class="btn">
        立即登录
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";

export default defineComponent({
  components: { LoginAccount, LoginPhone },
  setup() {
    const activeName = ref("account");
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof LoginAccount>>();
    // 点击登录按钮，触发账户、手机登录的登录请求
    const handleBtnClick = () => {
      console.log("登录按钮");
      accountRef.value?.loginAction(isKeepPassword.value);
    };
    return { activeName, isKeepPassword, accountRef, handleBtnClick };
  },
});
</script>

<style lang="less" scoped>
.login-panel {
  margin-top: 150px;
  width: 320px;
  .l-title {
    text-align: center;
  }

  .l-other {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .l-login-btn {
    margin-top: 10px;
    .btn {
      width: 100%;
    }
  }
}
</style>
