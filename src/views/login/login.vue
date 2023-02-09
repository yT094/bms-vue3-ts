<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginPanel from "./cpns/login-panel.vue";

export default defineComponent({
  components: { LoginPanel },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped></style>
