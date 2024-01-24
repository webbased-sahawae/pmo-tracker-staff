<template>
  <div>
    <NuxtPage />
    <div>{{ project }}</div>
  </div>
</template>

<script setup>
const { project } = useProject();
</script>
