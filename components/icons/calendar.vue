<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <rect
        width="16"
        height="16"
        x="4"
        y="4"
        stroke-dasharray="64"
        stroke-dashoffset="64"
        rx="1"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.5s"
          values="64;0"
        ></animate>
      </rect>
      <path stroke-dasharray="6" stroke-dashoffset="6" d="M7 4V2M17 4V2">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.5s"
          dur="0.2s"
          values="6;0"
        ></animate>
      </path>
      <path stroke-dasharray="12" stroke-dashoffset="12" d="M7 11H17">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.8s"
          dur="0.2s"
          values="12;0"
        ></animate>
      </path>
      <path stroke-dasharray="9" stroke-dashoffset="9" d="M7 15H14">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1s"
          dur="0.2s"
          values="9;0"
        ></animate>
      </path>
    </g>
    <rect width="14" height="0" x="5" y="5" fill="currentColor">
      <animate
        fill="freeze"
        attributeName="height"
        begin="0.5s"
        dur="0.2s"
        values="0;3"
      ></animate>
    </rect>
  </svg>
</template>

<script setup>
const { width, height } = defineProps(["width", "height"]);
</script>
