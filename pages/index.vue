<template>
  <div>
    <button type="button" @click="navButton">Start</button>
  </div>
</template>

<script setup>
const { trace } = useTrace();
const navButton = async () =>
  await navigateTo("/program/8ca69da3-4f05-4768-8748-89a04a536aed");
</script>
