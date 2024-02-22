<template>
  <div>
    <div class="font-bold">{{ ProgramIndicator.description }}</div>
    <!-- <div class="italic">{{ program.name }}</div>
    <div class="">{{ program.Partner.name }}</div> -->
    {{ data }}
    <div class="border-2" />
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { data } = defineProps(["data"]);

const { data: program } = await useFetch(
  `${BASE_URL}/program/${data.ProgramId}`
);

const { data: ProgramIndicator } = await useFetch(
  `${BASE_URL}/programindicator/${data.ProgramIndicatorId}`
);
</script>
