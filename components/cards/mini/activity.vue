<template>
  <div
    :class="` duration-1000 ${
      activityModal &&
      'bg-white bg-opacity-50 w-[100vw] h-[100vh] fixed inset-0 flex justify-center py-4 gap-2 '
    }`"
  >
    <div
      :class="`bg-white border-2 rounded-2xl px-2 py-1 overflow-auto ${
        activityModal && 'max-w-[75vw] pb-4'
      } ${borderStatus(activity.start, activity.summary).border}`"
    >
      <div class="flex gap-2" v-if="activityModal">
        <div
          class="border-2 border-x-slate-500 rounded-full px-2 hover:bg-blue-500 hover:border-x-blue-700 hover:text-white hover:font-bold"
          @click="
            () => {
              activityModal = false;
            }
          "
        >
          Close
        </div>
        <div
          class="border-2 border-x-slate-500 rounded-full px-2 hover:bg-red-500 hover:border-x-red-700 hover:text-white hover:font-bold"
        >
          Delete
        </div>
      </div>
      <div
        @click="
          () => {
            activityModal = true;
          }
        "
        :class="`duration-500 rounded-2xl px-4 py-1 leading-none cursor-pointer ${
          borderStatus(activity.start, activity.summary).text
        }`"
      >
        <div class="">
          <div>
            <h2 class="uppercase">
              {{ activity.title }}
            </h2>
            <div class="text-sm">{{ activity.Category.name }}</div>
            <div class="text-sm">{{ activity.location }}</div>
          </div>
        </div>
        <div class="flex text-sm italic font-bold leading-none">
          <!-- {{ activity }} -->
          <div>{{ dates(activity.start, activity.end).date + ", " }}</div>

          <div>
            {{
              new Date(activity.start).toLocaleString("default", {
                timeStyle: "short",
                hour12: false,
              })
            }}
            -
            {{
              new Date(activity.end).toLocaleString("default", {
                timeStyle: "short",
                hour12: false,
              })
            }}
          </div>
        </div>
        <div
          :class="`w-full border-2 rounded-full ${
            borderStatus(activity.start, activity.summary).border
          }`"
        />
      </div>
      <div v-if="activityModal" class="px-4">
        <h2>Discussion Points</h2>
        <div class="flex flex-col gap-2">
          <div
            v-for="(discussion, index) in activity.Discussions"
            :class="`border-x-4 px-2 rounded-xl ${
              borderStatus(activity.start, activity.summary).border
            }`"
          >
            <div class="flex">
              <h2>{{ index + 1 }}. {{ discussion.topic }}</h2>
              <div v-if="discussion.speaker">- {{ discussion.speaker }}</div>
            </div>
            <p>{{ discussion.description }}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 v-if="activityModal" class="mt-2">Summary</h2>
        <p class="leading-none text-justify px-4">
          {{ activity.summary }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const { activity } = defineProps(["activity"]);

import { dates } from "~/helpers/get-date.js";
const activityModal = ref(false);
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
          border: "border-green-500",
          text: " hover:bg-green-500 hover:text-white",
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
</script>
