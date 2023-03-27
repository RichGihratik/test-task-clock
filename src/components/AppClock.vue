<script lang="ts" setup>
import { computed } from "vue";
import type { ITimer } from "@/helpers/timer";
import { timeFormat } from "@/helpers/timeFormat";

const props = defineProps<{
  timer: ITimer;
}>();

const formattedTime = computed(() => {
  return timeFormat(
    props.timer.hours,
    props.timer.minutes,
    props.timer.seconds
  );
});

function pauseStartPress() {
  if (props.timer.isStarted) props.timer.pause();
  else props.timer.start();
}

const clockTimeClass = computed(() => {
  return props.timer.isStarted ? "clock-time-wrap_active" : "";
});

const iconClass = computed(() => {
  return props.timer.isStarted ? "icon_active" : "";
});
</script>

<template>
  <div class="clock">
    <div class="clock-time-wrap" :class="clockTimeClass">
      <span class="clock-time">{{ formattedTime }}</span>
    </div>
    <div class="clock-controls">
      <button class="btn clock-controls__btn" @click="pauseStartPress">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 4.2333331 5.2916665"
          version="1.1"
        >
          <path
            v-if="!timer.isStarted"
            style="
              fill-opacity: 1;
              stroke-width: 2.40004;
              stroke-linejoin: round;
              stroke-dasharray: none;
            "
            class="icon"
            :class="iconClass"
            d="M -1.0583333,0 V 5.2916664 L 0,4.6280259 V 0.66281864 Z M 0,0.66281864 V 4.6280259 L 3.1749996,2.6458332 v 0 z"
          />
          <path
            v-else
            class="icon"
            :class="iconClass"
            style="stroke-width: 2.4; stroke-linejoin: round"
            d="M 0 0 L 0 5.2916665 L 1.0583333 5.2916665 L 1.0583333 0 L 0 0 z M 2.1166666 0 L 2.1166666 5.2916665 L 3.1749999 5.2916665 L 3.1749999 0 L 2.1166666 0 z "
          />
        </svg>
      </button>
      <button class="btn clock-controls__btn" @click="timer.reset()">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 5.3181248 5.3181248"
          version="1.1"
        >
          <rect
            style="
              fill-opacity: 1;
              stroke: #000000;
              stroke-width: 0.0264583;
              stroke-linejoin: round;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            class="icon"
            :class="iconClass"
            width="20px"
            height="20px"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

$anim-speed: 0.2s;

.clock {
  width: 225px;
  background-color: $background-light;
  min-height: 120px;
  display: flex;
  flex-direction: column;
}

.clock-time-wrap {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px $text-color-dark;

  font-family: "Gotham Pro Regular";
  color: $text-color-dark;
  font-size: 22px;

  transition: border-bottom $anim-speed, color $anim-speed;

  &_active {
    border-bottom: solid 2px $text-color;
    color: $text-color;
  }
}

.clock-controls {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  &__btn {
    margin: 0 20px;
    color: $text-color-dark;

    &:hover .icon {
      fill: $text-color;
    }
  }
}

.icon {
  fill: $text-color-dark;
  transition: fill $anim-speed;

  &_active {
    fill: $text-color;
  }
}
</style>
