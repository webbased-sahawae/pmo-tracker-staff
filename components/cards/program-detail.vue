<template>
  <div class="primeBox">
    <div class="flex flex-col primeBox">
      <div class="flex justify-between items-center px-4">
        <div class="flex flex-row">
          <h1 class="hover:cursor-pointer" @click="openProject = !openProject">
            {{ data.name }}
          </h1>
          <div
            :class="`flex justify-center items-center border-2 rounded-full w-4 h-4 text-xs font-bold text-slate-400 hover:cursor-pointer hover:border-indigo-700 hover:text-indigo-700 transition ease-in-out duration-500 ${
              openInfo ? 'border-lime-700 text-lime-700' : ''
            }`"
            @click="openInfo = !openInfo"
          >
            !
          </div>
        </div>
        <div
          :class="`flex justify-center items-center border-2 border-black font-black rounded-full w-6 h-6 text-xs hover:cursor-pointer hover:border-indigo-700 hover:text-indigo-700 transition ease-in-out duration-500`"
        >
          ✎
        </div>
      </div>
      <!-- Program Info -->
      <div
        :class="`primeBox duration-1000 overflow-hidden ${
          openInfo ? 'max-h-[150vh]' : 'max-h-[0vh]'
        }`"
        @click="openInfo = false"
      >
        <CardsProgramInfo :ProgramDetail="ProgramDetail" />
      </div>
      <!-- End of Program Info -->
      <!-- Project List -->
      <div>
        <div
          :class="`primeBox duration-1000 overflow-hidden ${
            openProject ? 'max-h-[150vh] p-2 ' : 'max-h-[0vh]'
          }`"
        >
          <div
            class="buttonAdd"
            @click="
              () => {
                trace.ProgramId = data.id;
                navigateTo('/project/add/');
              }
            "
          >
            <p class="">+ PROJECT / ACTIVITY</p>
          </div>
          <div class="flex items-center flex-wrap justify-around gap-2">
            <CardsProgramProject :ProgramId="data.id" />
            <CardsProgramProject :ProgramId="data.id" />
            <CardsProgramProject :ProgramId="data.id" />
            <CardsProgramProject :ProgramId="data.id" />
            <CardsProgramProject :ProgramId="data.id" />
            <CardsProgramProject :ProgramId="data.id" />
            <CardsProgramProject :ProgramId="data.id" />
          </div>
        </div>
      </div>
      <!-- End Project List -->
    </div>
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { trace } = useTrace();
const openInfo = ref(false);
const openProject = ref(false);
const { data } = defineProps(["data"]);
const { data: ProgramDetail, status } = await useFetch(
  `${BASE_URL}/program/${data.id}`
);
</script>
