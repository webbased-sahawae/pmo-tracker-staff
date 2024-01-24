<template>
  <div class="px-5">
    {{ project }}
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <label class="text-xl font-bold">
          {{ PartnerDetail?.name }}
        </label>
        <!-- <div class="text-base">
          {{
            ProgramDetailError ? "Non-Program Activity" : ProgramDetail?.name
          }}
        </div> -->
        <div class="flex flex-col">
          <div class="flex gap-2">
            <div class="flex items-center">Project Status:</div>
            <div :class="`${projectStatus(project.info.status).text}`">
              {{ projectStatus(project.info.status).title }}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            step="50"
            :class="`${projectStatus(project.info.status).BarColor} p-0`"
            :value="project.info.status ? project.info.status : 0"
            @change="
              (e) => {
                project.info.status = e.target.value;
              }
            "
          />
        </div>
      </div>
      <div class="flex w-[50vw] justify-around gap-2">
        <div
          :class="
            activeTab == 'info'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click="setTab('info')"
        >
          Info
        </div>
        <div
          :class="
            activeTab == 'background'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click="setTab('background')"
        >
          Background
        </div>
        <div
          :class="
            activeTab == 'rundown'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click="setTab('rundown')"
        >
          Rundown
        </div>

        <div
          :class="
            activeTab == 'invitation'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click="setTab('invitation')"
        >
          Invitation
        </div>
        <div
          :class="
            activeTab == 'sinergy'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click="setTab('sinergy')"
        >
          Sinergy
        </div>
      </div>
      <div
        class="flex flex-col p-2 h-[75vh] xl:p-10 py-5 w-[100vw] xl:w-[50vw]"
      >
        <!-- {{ activeTab }} -->
        <FormsProjectInfo v-if="activeTab == 'info'" />
        <FormsProjectBackground v-if="activeTab == 'background'" />
        <FormsProjectRundown v-if="activeTab == 'rundown'" />
        <FormsProjectInvitation v-if="activeTab == 'invitation'" />
        <FormsProjectSinergy v-if="activeTab == 'sinergy'" />
      </div>
    </div>

    <!-- <FormsProject />
    test -->
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { trace } = useTrace();
const { project } = useProject();

const {
  data: ProgramDetail,
  pending,
  error: ProgramDetailError,
} = await useFetch(`${BASE_URL}/program/${trace.value.ProgramId}`);
// PartnerProgram = ProgramDetail.value;

const { data: PartnerDetail, status } = await useFetch(
  `${BASE_URL}/partner/${trace.value.PartnerId}`
);

const projectStatus = (value) => {
  if (value == 100)
    return {
      BarColor: "accent-emerald-500",
      title: "Complete",
      text: "text-emerald-500",
    };
  else if (value == 50)
    return {
      BarColor: "accent-orange-500",
      text: "text-orange-500",
      title: "On Going",
    };
  else
    return {
      BarColor: "accent-red-500",
      text: "text-red-500",
      title: "On Hold",
    };
};
const activeTab = useState("tab", () => "info");
const setTab = (valInput) => {
  activeTab.value = valInput;
};
</script>
