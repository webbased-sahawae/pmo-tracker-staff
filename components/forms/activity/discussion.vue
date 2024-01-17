<template>
  <div>
    <textarea
      v-for="(item, index) in activity.discussion"
      class="px-2"
      :value="activity.discussion"
      @change="
        (e) => {
          activity.discussion = e.target.value;
        }
      "
    />
  </div>
</template>
<script setup>
const { activity } = useActivity();
</script>
