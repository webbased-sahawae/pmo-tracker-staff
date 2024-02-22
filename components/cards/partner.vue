<template>
  <div
    class="flex flex-col justify-between primeBox text-sm px-2 hover:text-white hover:bg-red-500 hover:cursor-pointer mb-2"
  >
    <div class="text-center">
      <div class="font-bold">
        {{ partner.name }}
      </div>
      <div class="italic">
        {{ partner.chief }}
      </div>
      <div class="">
        {{ partner.Institution.name }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { PartnerId } = defineProps(["PartnerId"]);
const { data: partner, status } = await useFetch(
  `${BASE_URL}/partner/${PartnerId}`
);
</script>
