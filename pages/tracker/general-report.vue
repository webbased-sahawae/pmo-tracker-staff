<template>
  <div>
    <div
      class="flex w-full justify-between px-6 py-2 gap-4 mb-2 border-b-2 border-b-dprimary"
    >
      <div
        :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-full flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
          institutionActive.quarter == 'all' ? 'font-bold text-dsecondary' : ''
        }`"
        @click="
          () => {
            institutionActive.quarter = 'all';
          }
        "
      >
        Overall
      </div>
      <div
        :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-full flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
          institutionActive.quarter == 1 ? 'font-bold text-dsecondary' : ''
        }`"
        @click="
          () => {
            institutionActive.quarter = 1;
          }
        "
      >
        Quarter 1
      </div>
      <div
        :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-full flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
          institutionActive.quarter == 2 ? 'font-bold text-dsecondary' : ''
        }`"
        @click="
          () => {
            institutionActive.quarter = 2;
          }
        "
      >
        Quarter 2
      </div>
      <div
        :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-full flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
          institutionActive.quarter == 3 ? 'font-bold text-dsecondary' : ''
        }`"
        @click="
          () => {
            institutionActive.quarter = 3;
          }
        "
      >
        Quarter 3
      </div>
      <div
        :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-full flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
          institutionActive.quarter == 4 ? 'font-bold text-dsecondary' : ''
        }`"
        @click="
          () => {
            institutionActive.quarter = 4;
          }
        "
      >
        Quarter 4
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="grid grid-cols-6 gap-4">
        <div
          class="col-span-2 rounded-2xl border-4 border-dprimary flex flex-col items-center text-dprimary"
        >
          <h2 class="border-b-2 border-b-dprimary w-full flex justify-center">
            Progress Program
          </h2>
          <div v-if="recapStatus.status == 'pending'" class="flex w-[7vw]">
            <IconsLoading />
          </div>
          <div
            v-if="
              recapStatus.status == 'success' &&
              !institutionActive.programPercentage
            "
            class="flex w-full h-full justify-center items-center uppercase font-bold"
          >
            No Program recorded
          </div>
          <div
            v-if="
              recapStatus.status == 'success' &&
              institutionActive.programPercentage
            "
            class="flex w-full h-full flex-col justify-center items-center"
          >
            <span
              :class="`font-bold text-6xl ${
                projectStatus(institutionActive.programPercentage).text
              }`"
              >{{ institutionActive.programPercentage }}%</span
            >
            <span
              :class="`font-bold text-base italic ${
                projectStatus(institutionActive.programPercentage).text
              }`"
              >{{
                projectStatus(institutionActive.programPercentage).title
              }}</span
            >
            <!-- <div class="flex gap-2 justify-center px-2 w-full">
              <div class="flex flex-col leading-none items-center w-full">
                <span class="text-nowrap"
                  ><span class="text-xl font-bold text-stop">10</span> Project
                </span>
                <span class="italic w-full text-center text-stop"
                  >Impactful</span
                >
              </div>
              <div class="flex flex-col leading-none items-center w-full">
                <span class="text-nowrap"
                  ><span class="text-xl font-bold text-ongoing">20</span>
                  Project
                </span>
                <span class="italic w-full text-center text-ongoing"
                  >Highly Impactful</span
                >
              </div>
              <div class="flex flex-col leading-none items-center w-full">
                <span class="text-nowrap"
                  ><span class="text-xl font-bold text-complete">20</span>
                  Project
                </span>
                <span class="italic w-full text-center text-complete"
                  >Very Impactful</span
                >
              </div>
            </div> -->
          </div>
        </div>
        <div
          class="col-span-2 rounded-2xl flex justify-center flex-col items-center leading-none"
        >
          <div class="w-[30%]">
            <img src="../../assets/logo/kadin.png" />
          </div>
          <div
            class="text-2xl font-bold text-dprimary w-full justify-center flex flex-col items-center leading-none"
          >
            <div>{{ SYSTEM_NAME }} {{ new Date().getFullYear() }}</div>
            <div class="uppercase text-dsecondary">
              {{ institutionActive.name }}
            </div>
          </div>
          <div class="text-dprimary">
            {{ SYSTEM_DESCRIPTION }}
          </div>
        </div>
        <div
          class="col-span-2 rounded-2xl border-4 border-dprimary flex flex-col items-center text-dprimary"
        >
          <h2 class="border-b-2 border-b-dprimary w-full flex justify-center">
            Sinergy Recap
          </h2>
          <div class="p-2 w-full text-black">
            <table class="w-full table-auto">
              <tbody>
                <tr
                  v-for="institution in institutionList.filter(
                    (el) => el.id != institutionActive.id
                  )"
                >
                  <!-- <td
                    @click="
                      () => {
                        institutionActive.id = institution.id;
                        institutionActive.name = institution.name;
                      }
                    "
                    class="cursor-pointer"
                  > -->
                  <td>
                    {{ institution.name }}
                  </td>
                  <td>:</td>
                  <td>{{ Math.floor(Math.random() * (20 - 10 + 1) + 10) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div
          class="col-span-6 rounded-2xl border-4 border-dprimary flex flex-col items-center text-dprimary"
        >
          <div class="flex w-full gap-4 px-4 border-b-2 border-b-dprimary">
            <div
              :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-fit flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
                detailTab == 'activities' && 'font-bold text-dsecondary'
              }`"
              @click="() => (detailTab = 'activities')"
            >
              Activities
            </div>
            <div
              :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-fit flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
                detailTab == 'projects' && 'font-bold text-dsecondary'
              }`"
              @click="() => (detailTab = 'projects')"
            >
              Projects
            </div>
            <div
              :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-fit flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
                detailTab == 'programs' && 'font-bold text-dsecondary'
              }`"
              @click="() => (detailTab = 'programs')"
            >
              Programs
            </div>
            <div
              :class="`hover:border-y-dprimary border-y-transparent border-y-2 w-fit flex justify-center hover:font-bold cursor-pointer uppercase duration-500 ${
                detailTab == 'departments' && 'font-bold text-dsecondary'
              }`"
              @click="() => (detailTab = 'departments')"
            >
              Departments
            </div>
          </div>
          <div class="h-full overflow-hidden h-max">
            <GeneralReportActivities
              v-if="detailTab == 'activities'"
              :InstitutionId="institutionActive.id"
              :key="institutionActive.id"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  INSTITUTION_ID,
  SYSTEM_DESCRIPTION,
  SYSTEM_NAME,
} from "~/constants/ids";
import { BASE_URL } from "~/constants/urls";
const { trace } = useTrace("trace");
trace.value = {};
const recapStatus = ref({ status: "pending", error: null });
const detailTab = ref("activities");
const institutionActive = ref({
  id: INSTITUTION_ID,
  name: "KADIN INDONESIA",
  quarter: "all",
  programPercentage: 0,
});
const { data: institutionList, status } = await useFetch(
  `${BASE_URL}/institution`
);

const { data: rawRecap } = await useFetch(
  `${BASE_URL}/institution/recap/${institutionActive.value.id}`,
  { query: { quarter: institutionActive.value.quarter, year: "2024" } }
);
institutionActive.value.programPercentage = rawRecap.value;
recapStatus.value.status = status.value;
watch(institutionActive.value, async () => {
  try {
    console.log(institutionActive.value);
    recapStatus.value.status = "pending";

    const {
      data: rawRecap,
      status: newRecapStatus,
      error,
    } = await useFetch(
      `${BASE_URL}/institution/recap/${institutionActive.value.id}`,
      { query: { quarter: institutionActive.value.quarter, year: "2024" } }
    );
    institutionActive.value.programPercentage = rawRecap.value;
    recapStatus.value = { status: newRecapStatus.value, error };
  } catch (error) {
    recapStatus.value = { status: error, error };
  }
});
const projectStatus = (value) => {
  if (value > 80)
    return {
      BarColor: "accent-complete",
      title: "Very Impactful",
      text: "text-complete",
      border: "border-complete",
    };
  else if (value > 40)
    return {
      BarColor: "accent-ongoing",
      text: "text-ongoing",
      title: "Highly Impactful",
      border: "border-ongoing",
    };
  else
    return {
      BarColor: "accent-stop",
      text: "text-stop",
      title: "Impactful",
      border: "border-stop",
    };
};
</script>
