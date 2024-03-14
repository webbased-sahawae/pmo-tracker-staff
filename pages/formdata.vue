<template>
  <div>
    <input
      type="file"
      @change="
        (e) => {
          formData.append('gambar', e.target.files[0]);
          console.log(e.target.files[0]);
        }
      "
    />
    <button
      @click="
        () => {
          sendFile();
        }
      "
    >
      asa
    </button>
    {{}}
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const formData = new FormData();

const sendFile = async () => {
  await useFetch(`${BASE_URL}/project/test`, {
    method: "POST",
    // headers: {
    //   "Content-Type": "multipart/form-data",
    // },
    body: { namanya: "cobam", ...formData },
  });
};
</script>
