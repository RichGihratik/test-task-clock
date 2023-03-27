<script lang="ts" setup>
import { ref } from "vue";
import { Timer, type ITimer } from "@/helpers/timer";
import { KeyGen } from "@/helpers/idUtils";
import AppClock from "./AppClock.vue";

const timers = ref<{ id: number; obj: ITimer }[]>([]);

const keyGen = new KeyGen();

function addNew() {
  timers.value.push({
    id: keyGen.createKey(),
    obj: new Timer(),
  });
}
</script>

<template>
  <div class="clock-list">
    <div class="clock-list__item" v-for="timer in timers" :key="timer.id">
      <AppClock :timer="timer.obj" />
    </div>
    <button class="btn clock-list__add-btn" @click="addNew()">
      <svg width="20" height="20" viewBox="0 0 5.291666 5.291666" version="1.1">
        <path
          style="
            fill-opacity: 1;
            stroke: #000000;
            stroke-width: 0.0264583;
            stroke-linejoin: round;
            stroke-dasharray: none;
            stroke-opacity: 1;
          "
          class="icon"
          d="M 2.2623943,0 V 2.2623943 H 0 v 0.79375 h 2.2623943 v 2.2618776 h 0.79375 V 3.0561443 h 2.2618776 v -0.79375 H 3.0561443 V 0 Z"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.clock-list {
  padding: 45px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  row-gap: 45px;
  column-gap: 45px;
  place-content: center center;

  @media (max-width: $lg) {
    grid-template-columns: repeat(2, auto);
  }

  @media (max-width: $md) {
    grid-template-columns: auto;
  }

  &__item {
    max-width: 225px;
    width: 100%;
  }

  &__add-btn {
    display: block;
    width: 225px;
    height: 120px;
    background-color: $background-light;
  }
}

.icon {
  fill: $text-color-dark;
}
</style>
