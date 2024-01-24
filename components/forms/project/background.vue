<template>
  <div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col">
        <div>Background</div>
        <textarea
          :value="project.info.background"
          @keyup="
            (e) => {
              console.log(e.target);

              project.info.background = e.target.value;
            }
          "
          rows="15"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const { project } = useProject();
</script>
