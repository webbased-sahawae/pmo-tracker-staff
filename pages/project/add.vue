<template>
  <Head
    ><Title>
      {{ PartnerDetail?.name }}
    </Title>
  </Head>
  <div class="px-5">
    <!-- {{ project }} -->
    <div class="flex flex-col items-center">
      <div class="flex flex-col items-center">
        <label class="text-xl font-bold">
          {{ PartnerDetail?.name }}
        </label>
        <div class="text-base">
          {{
            ProgramDetailError ? "Non-Program Activity" : ProgramDetail?.name
          }}
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
            activeTab == 'agenda'
              ? 'flex justify-center border-b-8 w-full font-bold cursor-pointer	items-center text-center'
              : 'flex justify-center border-b-4 w-full cursor-pointer	items-center text-center'
          "
          @click="setTab('agenda')"
        >
          Agenda
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
      <div class="flex flex-col h-[75vh] p-10 py-5 w-[50vw] overflow-auto">
        <!-- {{ activeTab }} -->
        <FormsProjectInfo v-if="activeTab == 'info'" />
        <FormsProjectBackground v-if="activeTab == 'background'" />
        <FormsProjectAgenda v-if="activeTab == 'agenda'" />
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

const {
  data: ProgramDetail,
  pending,
  error: ProgramDetailError,
} = await useFetch(`${BASE_URL}/program/${trace.value.ProgramId}`);
// PartnerProgram = ProgramDetail.value;

const { data: PartnerDetail, status } = await useFetch(
  `${BASE_URL}/partner/${trace.value.PartnerId}`
);

const activeTab = useState("tab", () => "info");
const { project } = useProject();
const setTab = (valInput) => {
  activeTab.value = valInput;
};
</script>
