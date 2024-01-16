<template>
  <div class="flex gap-2 flex-col">
    <h1 class="text-center uppercase">
      {{ PartnerDetail?.name }}
    </h1>
    <!-- Program -->
    <div class="flex flex-col">
      <h2>Program</h2>
      <input
        placeholder="Nama Program"
        :value="addProgram.program.name"
        @keyup="
          (e) => {
            addProgram.program.name = e.target.value;
          }
        "
      />
    </div>
    <!-- Visi Program -->
    <div class="flex flex-col">
      <div>
        <h2>Visi Program</h2>
      </div>
      <div class="flex flex-col gap-2">
        <div
          v-for="(vision, index) in addProgram.vision"
          class="flex flex-row gap-6 items-center"
        >
          <textarea
            rows="2"
            :placeholder="`Visi program ke-${index + 1}`"
            class="w-full"
            :value="addProgram.vision[index].description"
            @keyup="
              (e) => {
                addProgram.vision[index].description = e.target.value;
              }
            "
          />
          <div
            class="buttonDelete"
            :onclick="() => addProgram.vision.splice(index, 1)"
          >
            X
          </div>
        </div>
        <div
          class="buttonAdd"
          @click="
            () => {
              addProgram.vision.push({});
            }
          "
        >
          Add vision
        </div>
      </div>
    </div>
    <!-- Pendorong Eksekusi Program -->
    <div class="flex flex-col">
      <h2>Pendorong Eksekusi Program</h2>
      <div class="flex flex-col gap-2">
        <div
          v-for="(driver, index) in addProgram.driver"
          class="flex flex-row gap-6 items-center"
        >
          <textarea
            rows="2"
            :placeholder="`Pendorong eksekusi program ke-${index + 1}`"
            class="w-full"
            :value="addProgram.driver[index].description"
            @keyup="
              (e) => {
                addProgram.driver[index].description = e.target.value;
              }
            "
          />
          <div
            class="buttonDelete"
            :onclick="() => addProgram.driver.splice(index, 1)"
          >
            X
          </div>
        </div>
        <div
          class="buttonAdd"
          @click="
            () => {
              addProgram.driver.push({});
            }
          "
        >
          Add Program Driver
        </div>
      </div>
    </div>
    <!-- KPI Yang dipantau -->
    <div class="flex flex-col">
      <h2>KPI yang dipantau</h2>
      <div class="flex flex-col gap-2">
        <div
          v-for="(indicator, index) in addProgram.indicator"
          class="flex flex-row gap-6 items-center"
        >
          <textarea
            rows="2"
            :placeholder="`KPI yang dipantau ke-${index + 1}`"
            class="w-full"
            :value="addProgram.indicator[index].description"
            @keyup="
              (e) => {
                addProgram.indicator[index].description = e.target.value;
              }
            "
          />
          <div
            class="buttonDelete"
            :onclick="() => addProgram.indicator.splice(index, 1)"
          >
            X
          </div>
        </div>
        <div
          class="buttonAdd"
          @click="
            () => {
              addProgram.indicator.push({});
            }
          "
        >
          Add KPI
        </div>
      </div>
    </div>
    <!-- Tahapan Eksekusi -->
    <div class="flex flex-col">
      <h2>Tahapan Eksekusi</h2>
      <div class="flex flex-col gap-2">
        <div
          v-for="(phase, index) in addProgram.phase"
          class="flex flex-row gap-6 items-center"
        >
          <textarea
            rows="2"
            :placeholder="`Tahapan Eksekusi ke-${index + 1}`"
            class="w-full"
            :value="addProgram.phase[index].description"
            @keyup="
              (e) => {
                addProgram.phase[index].description = e.target.value;
              }
            "
          />
          <div>
            <h3>Execution periode</h3>
            <select
              name="quarter"
              @change="
                (e) => {
                  addProgram.phase[index].quarter = e.target.value;
                }
              "
            >
              <option value="1">Q1</option>
              <option value="2">Q2</option>
              <option value="3">Q3</option>
              <option value="4">Q4</option>
            </select>
          </div>
          <div
            class="buttonDelete"
            :onclick="() => addProgram.phase.splice(index, 1)"
          >
            X
          </div>
        </div>
        <div
          class="buttonAdd"
          @click="
            () => {
              addProgram.phase.push({ quarter: 1 });
            }
          "
        >
          Add Tahapan Eksekusi
        </div>
      </div>
    </div>
    <!-- PIC (Komtap) -->
    <div class="flex flex-col gap-2">
      <h2>PIC (Komtap)</h2>
      <div class="flex gap-4">
        <div class="flex gap-2">
          <input placeholder="Type to search" @keyup="searchCommittees" />
          <div class="flex gap-2"></div>
        </div>
        <div
          class="flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"
        >
          <CardsButtonToAdd
            v-for="committee in committees.value"
            :title="committee.name"
            :description="committee.chief"
            :key="committee.id"
            @click="addId('committee', { CommitteeId: committee.id })"
          />
        </div>
      </div>

      <div
        class="flex flex-row flex-wrap gap-2 primeBox p-2 w-full"
        v-if="addProgram.committee.length"
      >
        <CardsButtonAdded
          v-for="(item, index) in addProgram.committee"
          :FieldId="item.CommitteeId"
          field="committee"
          :onclick="() => addProgram.committee.splice(index, 1)"
          :key="item.CommitteeId"
        />
      </div>
      <!-- {{ partners }} -->
    </div>
    <!-- Mitra Strategis -->
    <div class="flex flex-col gap-2">
      <h2>Mitra Strategis</h2>
      <div class="flex gap-4">
        <div class="flex gap-2">
          <input placeholder="Type to search" @keyup="searchPartners" />
          <div class="flex gap-2"></div>
        </div>
        <div
          class="flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"
        >
          <CardsButtonToAdd
            v-for="partner in partners.value"
            :title="partner.name"
            :description="partner.chief"
            :key="partner.id"
            @click="addId('partner', { PartnerId: partner.id })"
          />
        </div>
      </div>

      <div
        class="flex flex-row flex-wrap gap-2 primeBox p-2 w-full"
        v-if="addProgram.partner.length"
      >
        <CardsButtonAdded
          v-for="(item, index) in addProgram.partner"
          :FieldId="item.PartnerId"
          field="partner"
          :onclick="() => addProgram.partner.splice(index, 1)"
          :key="item.PartnerId"
        />
      </div>
      <!-- {{ partners }} -->
    </div>
    <!-- Keterkaitan 17 Program -->
    <div class="flex flex-col">
      <h2>Keterkaitan 17 Prioritas</h2>
      <div class="flex gap-4">
        <div class="flex gap-2">
          <input placeholder="Type to search" @keyup="searchPriority" />
          <div class="flex gap-2"></div>
        </div>
        <div
          class="flex flex-row gap-2 primeBox p-2 w-full overflow-scroll scroll-smooth"
        >
          <CardsButtonToAdd
            v-for="priority in priorities.value"
            :title="priority.name"
            :description="priority.chief"
            :key="priority.id"
            @click="addId('priority', { PriorityId: priority.id })"
          />
        </div>
      </div>

      <div
        class="flex flex-row flex-wrap gap-2 primeBox p-2 w-full"
        v-if="addProgram.priority.length"
      >
        <CardsButtonAdded
          v-for="(item, index) in addProgram.priority"
          :FieldId="item.PriorityId"
          :onclick="() => addProgram.priority.splice(index, 1)"
          field="priority"
          :key="item.PriorityId"
        />
      </div>
    </div>
    <div class="flex max-w-[100vw] gap-4">
      <button
        class="buttonAdd"
        style="width: 100%"
        type="submit"
        @click="submitProgram"
      >
        Submit
      </button>
      <button
        class="buttonDelete"
        style="width: 100%"
        type="button"
        :onclick="
          () => {
            navigateTo(`/program/${trace.PartnerId}`);
          }
        "
      >
        Cancel
      </button>
    </div>
    {{ addProgram }}
  </div>
</template>
<script setup>
import { uniquePartner } from "~/helpers/array.js";
import { BASE_URL } from "~/constants/urls";
const { trace } = useTrace();
if (!trace.value.PartnerId) await navigateTo("/program");
console.log(trace.value.PartnerId);

const { data: PartnerDetail, status } = await useFetch(
  `${BASE_URL}/partner/${trace.value.PartnerId}`
);

const addProgram = ref({
  program: { PartnerId: trace.value.PartnerId },
  vision: [],
  driver: [],
  indicator: [],
  phase: [],
  committee: [],
  partner: [],
  priority: [],
});
// Committees module
const committees = ref([]);
const searchCommittees = async (e) => {
  if (e.target.value.length > 2) {
    const { data: ProgramCommittees, status } = await useFetch(
      `${BASE_URL}/committee/search/${e.target.value}`
    );
    if (ProgramCommittees) committees.value = ProgramCommittees;
    else committees.value = [];
  }
  if (e.target.value.length < 3) committees.value = [];
};

// Partner module
const partners = ref([]);
const searchPartners = async (e) => {
  if (e.target.value.length > 2) {
    const { data: StratgicPartner, status } = await useFetch(
      `${BASE_URL}/partner/search/${e.target.value}`
    );
    if (StratgicPartner) partners.value = StratgicPartner;
    else partners.value = [];
  }
  if (e.target.value.length < 3) partners.value = [];
};
// Priority module
const priorities = ref([]);
const searchPriority = async (e) => {
  if (e.target.value.length > 2) {
    const { data: ProgramPriorities, status } = await useFetch(
      `${BASE_URL}/priority/search/${e.target.value}`
    );
    if (ProgramPriorities) priorities.value = ProgramPriorities;
    else priorities.value = [];
  }
  if (e.target.value.length < 3) priorities.value = [];
};

const addId = (fieldName, value) => {
  console.log(fieldName, value);

  addProgram.value[fieldName] = uniquePartner([
    ...addProgram.value[fieldName],
    value,
  ]);
};

const submitProgram = async () => {
  if (!addProgram.value.program.name) console.log("input program name");
  else {
    const { data: responseData } = await useFetch(
      `${BASE_URL}/program/create`,
      {
        method: "post",
        body: addProgram.value,
      }
    );
    console.log(responseData);
    await navigateTo(`/program/${trace.value.PartnerId}`);
  }
};
</script>
