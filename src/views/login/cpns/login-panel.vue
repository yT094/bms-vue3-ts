<template>
  <div class="login-panel">
    <h1 class="l-title">后台管理系统</h1>
    <el-tabs type="border-card" v-model="activeName" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i>账号登录</span>
        </template>
        账号密码
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i>手机登录</span>
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const activeName = ref("account");
    return { activeName };
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
}
</style>
