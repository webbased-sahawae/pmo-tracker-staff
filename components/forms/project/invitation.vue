<template>
  <div>
    <div>
      <div>
        <label>Name</label><SearchUser :set-value="project.invitation" />
      </div>
      <div class="grid grid-cols-4 gap-2">
        <CardsUser v-for="item in project.invitation" :UserId="item" />
      </div>
    </div>
  </div>
</template>
<script setup>
const { project } = useProject();

// const searchUser = ref([]);
</script>
