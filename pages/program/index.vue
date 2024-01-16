<template>
  <button
    type="button"
    @click="
      () => {
        trace.program = 'coba';
      }
    "
  >
    hit me
  </button>
  <button
    type="button"
    @click="
      () => {
        navigateTo('/program/de63b6c2-8f59-4427-8523-8eec517d779d');
      }
    "
  >
    nav
  </button>
</template>

<script setup>
const { trace } = useTrace();
</script>
