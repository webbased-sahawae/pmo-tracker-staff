<template>
  <div :class="`border-4 rounded-2xl px-2 flex ${isNotComplete()?.class}`">
    <div class="w-[10%]">
      <img
        v-if="!isNotComplete()?.isTrue"
        src="../../../assets/logo/kadin.png"
      />
      <div class="flex justify-center items-center text-pred">
        <IconsWarning v-if="isNotComplete()?.isTrue" />
      </div>
    </div>
    <div class="w-full p-2">
      <div class="flex justify-between items-start">
        <div class="leading-none">
          <h2 class="uppercase">
            {{ data.title }}
          </h2>
          <h6>Location: {{ data.location }}</h6>
          <span>{{ dates(data.start, data.end) }}</span>
        </div>
        <span class="italic" v-if="data.Project?.title"
          >Project Name:
          <span class="font-bold">
            {{ data.Project?.title }}
          </span>
        </span>
        <span class="italic font-bold text-stop" v-if="!data.Project?.title">
          Non-Project Activity
        </span>
      </div>
      <p>{{ data.summary }}</p>
    </div>
  </div>
</template>
<script setup>
import { dates } from "~/helpers/get-date";
const { data } = defineProps(["data"]);
// console.log(data.summary);
const isNotComplete = () => {
  if (!data.summary && new Date(data.start) < new Date())
    return { class: "border-pred text-pred items-center", isTrue: true };
};
</script>
