<template>
  <div class="mt-4 flex flex-col gap-2">
    <!-- {{ Activities }} -->
    <div
      :class="`duration-1000 flex gap-2 w-full items-between justify-between`"
    >
      <div
        :class="`duration-500 border-grey-200 hover:border-ongoing hover:bg-ongoing hover:text-white border-2 w-full flex justify-center cursor-pointer rounded-2xl ${
          showActivity == 'all' && 'border-ongoing'
        }`"
        @click.prevent="
          () => {
            showActivity = 'all';
          }
        "
      >
        All
      </div>
      <div
        :class="`duration-500 border-grey-200 hover:border-ongoing hover:bg-ongoing hover:text-white border-2 w-full flex justify-center cursor-pointer rounded-2xl ${
          showActivity == 'past' && 'border-ongoing'
        }`"
        @click.prevent="
          () => {
            showActivity = 'past';
          }
        "
      >
        Past
      </div>
      <div
        :class="`duration-500 border-grey-200 hover:border-ongoing hover:bg-ongoing hover:text-white border-2 w-full flex justify-center cursor-pointer rounded-2xl ${
          showActivity == 'future' && 'border-ongoing'
        }`"
        @click.prevent="
          () => {
            showActivity = 'future';
          }
        "
      >
        Future
      </div>
    </div>
    <div class="flex flex-col gap-1">
      <div
        v-for="activity in Activities[showActivity]"
        :key="activity.id"
        :class="`cursor-pointer`"
      >
        <CardsMiniActivity :activity="activity" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { BASE_URL, KADIN_LOGO } from "~/constants/urls";
import { dates } from "~/helpers/get-date.js";
const activityModal = ref(false);
const showActivity = ref("all");
const { ProjectId } = useRoute().params;

const borderStatus = (startDate, summary) => {
  if (new Date(startDate) <= new Date()) {
    switch (summary) {
      case null:
        return {
          border: "border-red-500",
          text: "text-white bg-red-500 hover:bg-white hover:text-red-500",
        };
        break;
      default:
        return {
          border: "border-complete",
          text: " hover:bg-complete hover:text-white",
        };
        break;
    }
  } else {
    return {
      border: "border-blue-500",
      text: " hover:bg-blue-500 hover:text-white",
    };
  }
};

const { data: Activities } = await useFetch(
  `${BASE_URL}/activity/project/${ProjectId}`
);
</script>
