<template>
  <div class="buttonAdded md:w-[25vw] flex flex-col justify-center">
    <div class="flex px-2 font-bold w-full whitespace-pre-wrap text-center">
      {{ partner.name }}
    </div>
  </div>
</template>

<script setup>
import { BASE_URL } from "~/constants/urls";

const { FieldId, field } = defineProps(["FieldId", "field"]);
const { data: partner, status } = await useFetch(
  `${BASE_URL}/${field}/${FieldId}`
);
console.log(`${BASE_URL}/${field}/${FieldId}`);
</script>
