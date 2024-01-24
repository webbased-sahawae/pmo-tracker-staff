<template>
  <div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-2">
        <div
          :class="`flex px-4 items-center border-2 rounded-full hover:cursor-pointer hover:border-indigo-700 hover:text-indigo-700 transition ease-in-out duration-500 ${
            openInfo ? '' : ''
          }`"
          @click="openInfo = !openInfo"
        >
          {{ openInfo ? "New Rundown" : "+ Add Rundown" }}
        </div>
        <div
          :class="`flex gap-2 flex-col duration-1000 overflow-hidden ${
            openInfo ? 'max-h-[150vh]' : 'max-h-[0vh]'
          }`"
        >
          <div class="flex flex-col">
            Title
            <input
              class="px-2 w-full"
              type="text"
              :value="projectForm.title"
              @keyup="
                (e) => {
                  // console.log(e.target);

                  projectForm.title = e.target.value;
                }
              "
            />
          </div>
          <div class="flex flex-col">
            Venue
            <input
              class="px-2 w-full"
              type="text"
              :value="projectForm.location"
              @keyup="
                (e) => {
                  // console.log(e.target);

                  projectForm.location = e.target.value;
                }
              "
            />
          </div>
          <div class="flex items-center gap-2">
            <div class="flex w-full items-center gap-2">
              <div class="flex w-full items-center">
                Start:
                <input
                  type="datetime-local"
                  class="w-full px-2"
                  :value="projectForm.start"
                  @change="
                    (e) => {
                      console.log(e.target);

                      projectForm.start = e.target.value;
                    }
                  "
                />
              </div>
              <div class="flex w-full items-center">
                End:
                <input
                  class="w-full items-center px-2"
                  type="datetime-local"
                  :value="projectForm.end"
                  :min="projectForm.start"
                  @change="
                    (e) => {
                      console.log(e.target);

                      projectForm.end = e.target.value;
                    }
                  "
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full">
            Speaker / Moderator
            <textarea
              class="w-full px-2"
              rows="5"
              placeholder="Description"
              :value="projectForm.speaker"
              @keyup="
                (e) => {
                  console.log(e.target);

                  projectForm.speaker = e.target.value;
                }
              "
            />
          </div>
          <div class="flex flex-col w-full">
            Notes
            <textarea
              class="w-full px-2"
              rows="5"
              placeholder="Notes"
              :value="projectForm.notes"
              @keyup="
                (e) => {
                  console.log(e.target);

                  projectForm.notes = e.target.value;
                }
              "
            />
          </div>
          <button
            class="buttonAdd"
            style="width: 100%"
            type="submit"
            @click="
              () => {
                console.log(projectForm.title);
                if (projectForm.title) {
                  project.rundown.push(projectForm);
                  projectForm = {};
                }
              }
            "
          >
            Add
          </button>
        </div>
      </div>
    </div>
    {{ projectForm }}
  </div>
</template>
<script setup>
const { project } = useProject();
const projectForm = ref({});
const openInfo = ref(false);
</script>
