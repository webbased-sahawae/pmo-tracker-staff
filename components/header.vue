<template>
  <div class="p-5 w-full">
    {{ trace }}
    <img src="../assets/logo/kadin.png" width="50" />
  </div>
</template>
<script setup>
const { trace } = useTrace();
</script>
