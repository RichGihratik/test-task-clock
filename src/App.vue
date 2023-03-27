<script lang="ts" setup>
import AppClockList from "@/components/AppClockList.vue";
</script>

<template>
  <main class="page-main">
    <AppClockList />
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.page-main {
  background-color: $background;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
