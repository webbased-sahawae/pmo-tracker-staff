<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
  >
    <defs>
      <symbol id="lineMdMapMarkerMultipleAltTwotone0">
        <path
          stroke-linecap="round"
          d="M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
        >
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            keyTimes="0;0.7;1"
            values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"
          ></animate>
        </path>
      </symbol>
      <mask id="lineMdMapMarkerMultipleAltTwotone1">
        <use
          x="-2"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          href="#lineMdMapMarkerMultipleAltTwotone0"
        ></use>
        <use
          x="2"
          stroke="#000"
          stroke-width="4"
          href="#lineMdMapMarkerMultipleAltTwotone0"
        ></use>
        <use
          x="2"
          fill="#fff"
          fillOpacity="0"
          stroke="#fff"
          stroke-width="2"
          href="#lineMdMapMarkerMultipleAltTwotone0"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.5s"
            dur="0.15s"
            values="0;0.3"
          ></animate>
        </use>
      </mask>
    </defs>
    <rect
      width="24"
      height="24"
      fill="currentColor"
      mask="url(#lineMdMapMarkerMultipleAltTwotone1)"
    ></rect>
    <circle cx="14" cy="9" r="2.5" fill="currentColor" fillOpacity="0">
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="0.5s"
        dur="0.4s"
        values="0;1"
      ></animate>
    </circle>
  </svg>
</template>

<script setup>
const { width, height } = defineProps(["width", "height"]);
</script>
