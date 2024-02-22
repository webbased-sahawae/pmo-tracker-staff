<template>
  <div>
    <div class="flex flex-col gap-2">
      <div
        :class="`cursor-pointer ${!openAddKpi && 'buttonAdd'}`"
        @click="openAddKpi = !openAddKpi"
      >
        {{ openAddKpi ? "New KPI" : "+ Add KPI" }}
      </div>
      <div
        :class="` duration-1000 overflow-hidden w-full  ${
          openAddKpi ? 'max-h-[50vh] p-2 primeBox' : 'max-h-[0vh]'
        } `"
      >
        <p class="leading-none">
          Select programs to add <br /><i
            >if this project relates to any program(s)</i
          >
        </p>
        <select
          class="w-full text-white bg-white"
          @change="
            (e) => {
              !listPrograms
                .map((el) => JSON.stringify(el))
                .includes(JSON.stringify({ ProgramId: e.target.value })) &&
                listPrograms.push({ ProgramId: e.target.value });
            }
          "
        >
          <option disabled selected>Select Program</option>
          <option v-for="item in programs" :value="item.id">
            {{ item.name }}
          </option>
        </select>

        <div v-if="listKPI.length">
          Select KPI

          <div
            class="max-h-[25vw] w-full overflow-y-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] py-2 rounded-2xl"
          >
            <div
              v-for="item in listKPI"
              class="hover:bg-blue-500 rounded-2xl p-2 cursor-pointer hover:text-white"
              @click="
                {
                  !project.ProjectIndicators.map((el) =>
                    JSON.stringify(el)
                  ).includes(
                    JSON.stringify({
                      ProgramId: item.ProgramId,
                      ProgramIndicatorId: item.id,
                    })
                  ) &&
                    project.ProjectIndicators.push({
                      ProgramId: item.ProgramId,
                      ProgramIndicatorId: item.id,
                    });
                }
              "
            >
              <div class="flex flex-col">
                <b>
                  {{ item.description }}
                </b>
                <i>
                  {{ item.Program.name }}
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div
          v-for="item in project.ProjectIndicators.filter(
            (el) => !el.deletedAt
          )"
        >
          <div
            class="hover:text-red-500 cursor-pointer"
            @click="() => (item.deletedAt = new Date())"
          >
            <CardsProjectIndicator :data="item" />
            <!-- {{ item }} -->
          </div>
        </div>
      </div>
      <!-- {{ project.ProjectIndicators }} -->
    </div>
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";
const { project } = useProject();
const openAddKpi = ref(false);
const listPrograms = ref([]);
const { trace } = useTrace();
const listKPI = ref([]);
const { data: programs, status } = await useFetch(
  `${BASE_URL}/program/department/${trace.value.PartnerId}`
);

watch(listPrograms.value, async (newProg, oldProg) => {
  const {
    data: kpi,
    status,
    error,
  } = await useFetch(`${BASE_URL}/ProgramIndicator/`, {
    query: { ProgramList: JSON.stringify(listPrograms.value) },
  });
  listKPI.value = kpi.value;
});
</script>
