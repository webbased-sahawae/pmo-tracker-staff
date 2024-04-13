<template>
  <div class="flex px-4">
    <input
      type="file"
      accept="image/png,image/jpeg"
      class="border-0"
      @change="
        (e) => {
          formData.append('logo', e.target.files[0]);
        }
      "
    />
    <div
      class="cursor-pointer border-2 rounded-full border-orange-500 px-2 hover:text-white hover:bg-orange-500"
      @click.prevent="
        () => {
          sendFile();
        }
      "
    >
      Upload Logo
    </div>
    <!-- {{ typeof setModal }} -->
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { ProjectId } = defineProps(["ProjectId"]);
const emit = defineEmits(["setModal"]);
const formData = new FormData();

const sendFile = async () => {
  try {
    await useFetch(`${BASE_URL}/project/image/${ProjectId}`, {
      method: "POST",
      body: formData,
    });
    emit("setModal", false);
    // navigateTo(`/project/${ProjectId}`);
    // window.location.reload(true);
    // console.log("move");
  } catch (error) {
    console.log(error);
  }
};
</script>
