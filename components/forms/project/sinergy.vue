<template>
  <div class="flex flex-col gap-2">
    <SearchBox
      :set-value="project.sinergy"
      :api-route="'/partner/search/'"
      title-field="name"
      description-field="chief"
    />
    <div>
      <div class="flex flex-wrap">
        <text
          class="cursor-pointer hover:text-red-700"
          v-for="(item, index) in project.sinergy"
          @click="
            () => {
              project.sinergy.splice(index, 1);
            }
          "
          >{{ item }}{{ index < project.sinergy.length - 1 ? " | " : "" }}</text
        >
      </div>
    </div>
  </div>
</template>
<script setup>
const { project } = useProject();
const searchResult = ref([]);
</script>
