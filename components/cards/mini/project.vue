<template>
  <div
    :class="`w-full border-4 pb-2 px-2 rounded-2xl flex flex-col h-full cursor-pointer ${
      projectStatus(status).hoverborder
    } transition ease-in-out duration-500`"
    @click="
      () => {
        navigateTo(`/project/${ProjectId}`);
      }
    "
  >
    <div>
      <div class="flex justify-center">
        <img
          :src="`${
            logoId ? `${BASE_URL}/project/image/${logoId}` : KADIN_LOGO
          }`"
          class="h-[10vh] w-[20vw] object-contain rounded-2xl"
        />
      </div>
      <div
        :class="`rounded-full border-4 w-full ${projectStatus(status).border}`"
      />
    </div>
    <div class="flex flex-col justify-between h-full gap-2">
      <div>
        <h3 class="font-bold text-base text-center">{{ title }}</h3>
        <div class="text-sm italic text-center">{{ projectCategory }}</div>
        <div class="text-sm">{{ dates() }}</div>
      </div>
      <div>
        Latest activity:
        <div class="text-sm italic text-red-500">
          {{
            Math.ceil(
              (new Date() - new Date("02/27/2024")) / (1000 * 60 * 60 * 24)
            )
          }}
          days ago
        </div>
      </div>
      <div class="h-full">
        <div class="flex font-bold">
          <img src="~/assets/icons/sinergy.png" width="15" /> Sinergy:
          <span class="text-blue-700">
            {{ sinergy.length }}
          </span>
        </div>
        <div v-for="institution in institutions">
          <div
            v-if="
              sinergy.filter(
                (el) => el.Partner.Institution.id == institution.id
              ).length
            "
          >
            <span class="font-bold">
              {{
                sinergy.filter(
                  (el) => el.Partner.Institution.id == institution.id
                ).length
              }}
            </span>
            {{ institution.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- {{ sinergy }} -->
    <!-- {{ ProjectId }} -->
  </div>
</template>
<script setup>
import { BASE_URL, KADIN_LOGO } from "~/constants/urls";

const projectStatus = (value) => {
  if (value > 80)
    return {
      BarColor: "accent-green-500",
      title: "Very Impactful",
      text: "text-green-500",
      border: "border-green-500",
      hoverborder: "hover:border-green-500",
    };
  else if (value > 40)
    return {
      BarColor: "accent-orange-500",
      text: "text-orange-500",
      title: "Highly Impactful",
      border: "border-orange-500",
      hoverborder: "hover:border-orange-500",
    };
  else
    return {
      BarColor: "accent-gray-500",
      text: "text-gray-500",
      title: "Impactful",
      border: "border-gray-500",
      hoverborder: "hover:border-gray-500",
    };
};

const {
  ProjectId,
  logoId,
  title,
  projectCategory,
  status,
  startDate,
  endDate,
  sinergy,
} = defineProps([
  "ProjectId",
  "logoId",
  "title",
  "projectCategory",
  "status",
  "startDate",
  "endDate",
  "sinergy",
]);

const dates = () => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (
    start.getMonth() == end.getMonth() &&
    start.getFullYear() == end.getFullYear()
  ) {
    return `${
      start.getDate() == end.getDate()
        ? start.getDate()
        : `${start.getDate()} - ${end.getDate()}`
    } ${start.toLocaleDateString("id-ID", { month: "long", year: "numeric" })}`;
  } else {
    if (start.getFullYear() == end.getFullYear()) {
      return `${start.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
      })} - ${end.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`;
    } else {
      return `${start.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })} - ${end.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`;
    }
  }
};

const { data: institutions } = await useFetch(`${BASE_URL}/institution`);
</script>
