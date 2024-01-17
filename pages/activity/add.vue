<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col w-[75vw] gap-2">
      <!-- Info -->
      <div>
        <div
          @click="openContainer.info = !openContainer.info"
          class="hover:cursor-pointer"
        >
          Activity Info
        </div>
        <div
          :class="`primeBox duration-1000 overflow-hidden ${
            openContainer.info ? 'max-h-[150vh]' : 'max-h-[0vh]'
          }`"
        >
          <div>
            <FormsActivityInfo />
          </div>
        </div>
      </div>
      <!-- Attendance -->
      <div>
        <div
          @click="openContainer.attendance = !openContainer.attendance"
          class="hover:cursor-pointer"
        >
          Attendance
        </div>
        <div
          :class="`primeBox duration-1000 overflow-hidden ${
            openContainer.attendance ? 'max-h-[150vh]' : 'max-h-[0vh]'
          }`"
        >
          <div class="flex flex-col gap-2 p-2">
            <div class="flex gap-2 flex-wrap">
              <div
                class="buttonAdd"
                @click="() => activity.attendance.push('')"
              >
                + Pengurus Kadin Indonesia
              </div>
              <div
                class="buttonAdd"
                @click="() => activity.attendance.push('')"
              >
                + External
              </div>
            </div>
            <div
              v-for="(item, index) in activity.attendance"
              class="flex w-full gap-2"
            >
              <textarea
                class="px-2 w-full"
                :value="activity.attendance[index]"
                @change="
                  (e) => {
                    activity.attendance[index] = e.target.value;
                  }
                "
              />
              <div
                class="buttonDelete p-2"
                @click="
                  () => {
                    activity.attendance.splice(index, 1);
                  }
                "
              >
                X
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Discussion -->
      <div>
        <div
          @click="openContainer.discussion = !openContainer.discussion"
          class="hover:cursor-pointer"
        >
          Discussion
        </div>
        <div
          :class="`primeBox duration-1000 overflow-hidden ${
            openContainer.discussion ? 'max-h-[150vh]' : 'max-h-[0vh]'
          }`"
        >
          <div class="flex flex-col gap-2 p-2">
            <div class="buttonAdd" @click="() => activity.discussion.push('')">
              + Discussion
            </div>
            <div
              v-for="(item, index) in activity.discussion"
              class="flex w-full gap-2"
            >
              <textarea
                class="px-2 w-full"
                :value="activity.discussion[index]"
                @change="
                  (e) => {
                    activity.discussion[index] = e.target.value;
                  }
                "
              />
              <div
                class="buttonDelete p-2"
                @click="
                  () => {
                    activity.discussion.splice(index, 1);
                  }
                "
              >
                X
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Outcome -->
      <div>
        <div
          @click="openContainer.outcome = !openContainer.outcome"
          class="hover:cursor-pointer"
        >
          Outcome
        </div>
        <div
          :class="`primeBox duration-1000 overflow-hidden ${
            openContainer.outcome ? 'max-h-[150vh]' : 'max-h-[0vh]'
          }`"
        >
          <div class="flex flex-col gap-2 p-2">
            <div class="buttonAdd" @click="() => activity.outcome.push('')">
              + Outcome
            </div>
            <div
              v-for="(item, index) in activity.outcome"
              class="flex w-full gap-2"
            >
              <textarea
                class="px-2 w-full"
                :value="activity.outcome[index]"
                @change="
                  (e) => {
                    activity.outcome[index] = e.target.value;
                  }
                "
              />
              <div
                class="buttonDelete p-2"
                @click="
                  () => {
                    activity.outcome.splice(index, 1);
                  }
                "
              >
                X
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Todo -->
      <div>
        <div
          @click="openContainer.todo = !openContainer.todo"
          class="hover:cursor-pointer"
        >
          Todo
        </div>
        <div
          :class="`primeBox duration-1000 overflow-hidden ${
            openContainer.todo ? 'max-h-[150vh]' : 'max-h-[0vh]'
          }`"
        >
          <div class="flex flex-col gap-2 p-2">
            <div class="buttonAdd" @click="() => activity.todo.push('')">
              + Todo
            </div>
            <div
              v-for="(item, index) in activity.todo"
              class="flex w-full gap-2"
            >
              <textarea
                class="px-2 w-full"
                :value="activity.todo[index]"
                @change="
                  (e) => {
                    activity.todo[index] = e.target.value;
                  }
                "
              />
              <div
                class="buttonDelete p-2"
                @click="
                  () => {
                    activity.todo.splice(index, 1);
                  }
                "
              >
                X
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Summary -->
      <div>
        <div
          @click="openContainer.summary = !openContainer.summary"
          class="hover:cursor-pointer"
        >
          Summary
        </div>
        <div
          :class="`primeBox duration-1000 overflow-hidden ${
            openContainer.summary ? 'max-h-[150vh]' : 'max-h-[0vh]'
          }`"
        >
          <div class="flex flex-col gap-2 p-2">
            <div class="flex w-full gap-2">
              <textarea
                class="px-2 w-full"
                :value="activity.summary"
                @keyup="
                  (e) => {
                    activity.summary = e.target.value;
                  }
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    {{ activity }}
  </div>
</template>

<script setup>
const openContainer = ref({
  info: false,
  discussion: false,
  outcome: false,
  todo: false,
  attendance: false,
  summary: false,
});
const { activity } = useActivity();
</script>
