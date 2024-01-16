<template>
  <div class="buttonAdd">
    <div class="px-2 font-bold">
      {{ title }}
    </div>
    <div class="px-2 italic">
      {{ description }}
    </div>
  </div>
</template>

<script setup>
const { title, description } = defineProps(["title", "description"]);
</script>
