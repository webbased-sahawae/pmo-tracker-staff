<template>
  <div
    class="flex flex-col items-center xl:flex-row xl:items-start xl:justify-center gap-2"
  >
    asd
    <UIcon name="i-heroicons-light-bulb" />

    <div class="border-4 xl:w-[50vw] rounded-2xl p-2">
      <div class="xl:hidden block"><CardsProjectActivity /></div>
      <div class="">
        <div class="flex items-center border-4 px-4">
          <img
            :src="`${
              logoId ? `${BASE_URL}/project/image/${logoId}` : KADIN_LOGO
            }`"
            class="h-[10vh] w-[10vw] object-contain rounded-2xl"
          />
          <div class="flex flex-col xl:flex-row">
            <div class="leading-none border-4 border-black">
              <h1>
                {{ ProjectDetail.title }}
              </h1>
              <h3 :class="`${projectStatus().text}`">
                {{ projectStatus().title }}
              </h3>
              <p class="text-sm italic">{{ ProjectDetail.Category.name }}</p>
              <div>{{ dates() }}</div>
            </div>
            <div class="flex border-4 items-center">
              <div class="flex items-center mt-1 cursor-pointer">
                <img
                  src="https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_512px.png"
                  class="h-4 object-conatain"
                /><b> Drive </b>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-4 xl:w-[25vw] hidden xl:block rounded-2xl p-2">
      <CardsProjectActivity />
    </div>
    <!-- {{ ProjectDetail }} -->
  </div>
</template>
<script setup>
import { BASE_URL, KADIN_LOGO } from "~/constants/urls";

const { ProjectId } = useRoute().params;

const { data: ProjectDetail } = await useFetch(
  `${BASE_URL}/project/${ProjectId}`
);

const dates = () => {
  const start = new Date(ProjectDetail.value.start);
  const end = new Date(ProjectDetail.value.end);
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

const projectStatus = () => {
  if (ProjectDetail.value.status > 80)
    return {
      BarColor: "accent-green-500",
      title: "Very Impactful",
      text: "text-green-500",
      border: "border-green-500",
    };
  else if (ProjectDetail.value.status > 40)
    return {
      BarColor: "accent-orange-500",
      text: "text-orange-500",
      title: "Highly Impactful",
      border: "border-orange-500",
    };
  else
    return {
      BarColor: "accent-gray-500",
      text: "text-gray-500",
      title: "Impactful",
      border: "border-gray-500",
    };
};
</script>
