<template>
  <div class="p-5">
    <img src="../assets/logo/kadin.png" width="50" />
    {{ trace }}
  </div>
</template>
<script setup>
const { trace } = useTrace();
</script>
