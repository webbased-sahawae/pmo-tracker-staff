<template>
  <div>
    <!-- {{ trace }} -->
    <select
      @change="
        (e) => {
          navigateTo(`/program/${e.target.value}`);
        }
      "
    >
      <option
        v-for="item in PartnerList"
        :value="item.id"
        :selected="PartnerId == item.id"
      >
        {{ item.name }}
      </option>
    </select>
    <div class="flex flex-col items-center gap-2 leading-none mb-6">
      <h1 class="line-none">{{ PartnerDetail.name }}</h1>
      <span class="italic line-none">{{ PartnerDetail.chief }}</span>
    </div>
    <div class="flex flex-col gap-2 px-4">
      <div class="primeBox w-full p-2 gap-2 flex flex-col">
        <!-- {{ ProgramPartner }} -->
        <div class="buttonAdd" @click="() => navigateTo('/program/add/')">
          <p class="">+ Program</p>
        </div>

        <CardsProgramDetail v-for="program in ProgramPartner" :data="program" />
      </div>
      <div class="primeBox w-full h-full">
        Kegiatan Pengurus diluar Program
        <div class="p-2">
          <div class="buttonAdd" @click="() => navigateTo('/project/add/')">
            <p class="">+ Non-Program Activity</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls.js";
import { INSTITUTION_ID } from "~/constants/ids.js";
const { PartnerId } = useRoute().params;
const { trace } = useTrace();
trace.value = { ...trace.value, PartnerId };
trace.value.ProgramId && delete trace.value.ProgramId;
const { data: ProgramPartner } = await useFetch(
  `${BASE_URL}/program/department/${PartnerId}`
);
const { data: PartnerDetail } = await useFetch(
  `${BASE_URL}/partner/${PartnerId}`
);

const { data: PartnerList } = await useFetch(
  `${BASE_URL}/partner/institution/${INSTITUTION_ID}`
);
</script>
