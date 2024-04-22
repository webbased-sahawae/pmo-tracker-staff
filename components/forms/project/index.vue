<template>
  <div class="px-5 py-4">
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <label class="text-xl font-bold">
          {{ PartnerDetail?.name }}
        </label>

        <div class="flex flex-col">
          <div class="flex gap-2">
            <div class="flex items-center">Project Status:</div>
            <div :class="`${projectStatus(project.project.status).text}`">
              [{{ project.project.status }}]
              {{ projectStatus(project.project.status).title }}
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            class="md:w-[25vw]"
            :class="`${projectStatus(project.project.status).BarColor} p-0`"
            :value="project.project.status ? project.project.status : 0"
            @change="
              (e) => {
                project.project.status = e.target.value;
              }
            "
          />
        </div>
      </div>
      <div class="flex w-[50vw] justify-around gap-2">
        <div
          :class="
            activeTab == 'kpi'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click.prevent="setTab('kpi')"
        >
          KPI
        </div>
        <div
          :class="
            activeTab == 'info'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click.prevent="setTab('info')"
        >
          Info
        </div>
        <div
          :class="
            activeTab == 'background'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click.prevent="setTab('background')"
        >
          Background
        </div>
        <div
          :class="
            activeTab == 'ProjectRundown'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click.prevent="setTab('ProjectRundown')"
        >
          Rundown
        </div>

        <div
          :class="
            activeTab == 'sinergy'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click.prevent="setTab('sinergy')"
        >
          Sinergy
        </div>
      </div>
      <div
        class="flex flex-col p-2 h-[75vh] xl:p-10 py-5 w-[100vw] xl:w-[50vw]"
      >
        <div class="h-[80vh] overflow-y-auto">
          <!-- {{ activeTab }} -->
          <FormsProjectInfo v-if="activeTab == 'info'" />
          <FormsProjectBackground v-if="activeTab == 'background'" />
          <FormsProjectRundown v-if="activeTab == 'ProjectRundown'" />
          <FormsProjectSinergy v-if="activeTab == 'sinergy'" />
          <FormsProjectProgramRelation v-if="activeTab == 'kpi'" />
        </div>
        <div>
          <!-- {{ stayPage }} -->
          <div
            @click.prevent="stayPage = !stayPage"
            class="cursor-pointer"
            v-if="project?.project?.id"
          >
            <input type="checkbox" :checked="stayPage" />
            Stay on this page after submit
          </div>
          <div class="flex max-w-[100vw] gap-4">
            <div
              class="buttonAdd"
              style="width: 100%"
              type="button"
              @click.prevent="submitProject"
            >
              {{ !project?.project?.id ? "Submit" : "Update" }}
            </div>
            <button
              class="buttonDelete"
              style="width: 100%"
              type="button"
              :onclick="
                () => {
                  navigateTo({ path: `/program`, query: trace.PartnerId });
                }
              "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    {{ project }}
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";
const { trace } = useTrace();
const { project } = useProject();
project.value.PartnerId = trace.value.PartnerId;
project.value.project.ProgramId = trace.value.ProgramId;

// PartnerProgram = ProgramDetail.value;

const { data: PartnerDetail, status } = await useFetch(
  `${BASE_URL}/partner/${trace.value.PartnerId}`
);

const activeTab = ref("kpi");

const setTab = (valInput) => {
  activeTab.value = valInput;
};

const submitProject = async () => {
  console.log("click submit");
  if (!project.value.project.title) console.log("input project name");
  else {
    console.log("masuk");

    const { data: responseData } = await useFetch(`${BASE_URL}/project`, {
      method: "post",
      body: project.value,
      watch: false,
    });
    console.log(responseData);
    await navigateTo({
      path: "/tracker/assignment",
      query: { PartnerId: trace.value.PartnerId },
    });
    if (!stayPage.value || project.value.id) {
      console.log("move!!!");
      await navigateTo({
        path: "/tracker/assignment",
        query: { PartnerId: trace.value.PartnerId },
      });
    } else resetStateProject();
  }
};
const resetStateProject = () => {
  project.value = {
    project: {
      ProgramId: null,
      CategoryId: null,
      title: null,
      location: null,
      start: null,
      end: null,
      background: null,

      status: 1,
    },
    ProjectRundown: [],
    ProjectInvitation: [],
    Sinergy: [],
    ProjectIndicators: [],
  };
};

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

onBeforeUnmount(() => {
  resetStateProject();
});
</script>
