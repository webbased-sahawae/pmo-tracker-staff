<template>
  <div class="flex flex-col gap-2 primeBox">
    <div class="flex flex-col p-2">
      <h2>Visi Program</h2>
      <div
        v-for="vision in ProgramDetail.ProgramVisions"
        class="flex gap-2 items-start"
      >
        <img
          src="~/assets/icons/vision.png"
          class="object-contain"
          width="15"
        />
        <div>
          {{ vision.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2">
      <h2>Pendorong Eksekusi Program</h2>
      <div
        v-for="driver in ProgramDetail.ProgramDrivers"
        class="flex gap-2 items-start"
      >
        <img
          src="~/assets/icons/driver.png"
          class="object-contain"
          width="15"
        />
        <div>
          {{ driver.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2">
      <h2>KPI yang dipantau</h2>
      <div
        v-for="indicator in ProgramDetail.ProgramIndicators"
        class="flex gap-2 items-start"
      >
        <img
          src="~/assets/icons/indicator.png"
          class="object-contain"
          width="15"
        />
        <div>
          {{ indicator.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2">
      <h2>Tahapan Eksekusi</h2>
      <div
        v-for="phase in ProgramDetail.ProgramPhases"
        class="flex gap-2 items-start"
      >
        <img src="~/assets/icons/phase.png" class="object-contain" width="15" />
        <div>
          {{ phase.description }}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2">
      <h2>PIC (Komtap)</h2>
      <div
        v-for="committee in ProgramDetail.ProgramCommittee"
        class="flex gap-2 items-start"
      >
        <img
          src="~/assets/icons/committee.png"
          class="object-contain"
          width="15"
        />
        <div>
          {{ committee.Committee.name }}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2">
      <h2>Mitra Strategis</h2>
      <div
        v-for="partner in ProgramDetail.ProgramPartner"
        class="flex gap-2 items-start"
      >
        <img
          src="~/assets/icons/partner.png"
          class="object-contain"
          width="15"
        />
        <div>
          {{ partner.Partner.name }}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2">
      <h2>Keterkaitan 17 Program</h2>
      <div
        v-for="priority in ProgramDetail.ProgramPriority"
        class="flex gap-2 items-start"
      >
        <img
          src="~/assets/icons/priority.png"
          class="object-contain"
          width="15"
        />
        <div>
          {{ priority.Priority.keyword }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const { ProgramDetail } = defineProps(["ProgramDetail"]);
</script>
