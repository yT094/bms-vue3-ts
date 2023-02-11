<template>
  <div class="main">main</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    console.log("1111111111", route.path);
    return {};
  },
});
</script>

<style lang="less" scoped></style>
