<template>
  <div class="">
    <div class="flex gap-2 flex-col">
      <div class="flex flex-col">
        <label>Project name</label
        ><input
          class="px-2"
          placeholder="Project name"
          :value="project.info.title"
          @keyup="
            (e) => {
              project.info.title = e.target.value;
            }
          "
        />
      </div>
      <div class="flex flex-col">
        <label>Venue</label
        ><input
          class="px-2"
          placeholder="Venue"
          :value="project.info.location"
          @keyup="
            (e) => {
              project.info.location = e.target.value;
            }
          "
        />
      </div>
      <div class="flex flex-col">
        <div>
          <label>Jenis Aktifitas</label>
        </div>
        <select
          name="project"
          id="project"
          :value="project.info.type"
          @change="
            (e) => {
              project.info.type = e.target.value;
            }
          "
        >
          <option disabled selected>Please choose the project type</option>
          <option value="seminar">Seminar</option>
          <option value="training">Training</option>
          <option value="rapat">Rapat</option>
          <option value="forum">Forum</option>
          <option value="expo">Expo</option>
          <option value="undangan">Undangan</option>
          <option value="festival">Festival</option>
          <option value="event">Event</option>
          <option value="fgd">FGD</option>
        </select>
      </div>
      <div class="flex flex-col">
        <div class="flex gap-4 p-2">
          <div class="flex">
            <h3 class="me-2">Start</h3>
            <div>
              <input
                class="px-2"
                type="datetime-local"
                :value="project.info.start"
                @change="
                  (e) => {
                    project.info.start = e.target.value;
                  }
                "
              />
            </div>
          </div>
          <div class="flex">
            <h3 class="me-2">End</h3>
            <div>
              <input
                class="px-2"
                type="datetime-local"
                :value="project.info.end"
                :min="project.info.start"
                @change="
                  (e) => {
                    project.info.end = e.target.value;
                  }
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col" v-if="trace?.ProgramId">
        <label>Program KPI</label>
        <select
          @change="
            (e) => {
              // console.log(JSON.parse(e.target.value));
              project.indicator = uniquePartner([
                ...project.indicator,
                JSON.parse(e.target.value),
              ]);
            }
          "
          class="text-white"
        >
          <option value="default" selected disabled id="defaultSelect">
            Select KPI to Add
          </option>
          <option
            v-for="item in ProgramIndicator"
            :value="JSON.stringify(item)"
          >
            {{ item.description }}
          </option>
        </select>
        <div>
          <div
            v-for="(item, index) in project.indicator"
            class="hover:text-red-500 hover:cursor-pointer"
            @click="
              () => {
                project.indicator.splice(index, 1);
              }
            "
          >
            {{ item.description }}
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div>
          <label>Public Relation Request</label>
        </div>
        <div>
          <div class="flex gap-2 items-center">
            <input
              type="checkbox"
              :checked="project.info.flyer"
              @click="project.info.flyer = !project.info.flyer"
            />
            <img
              src="~/assets/icons/flyer.png"
              alt="flyer"
              class="src"
              width="20vw"
            />
            <label>Flyer</label>
          </div>
          <div class="flex gap-2 items-center">
            <input
              type="checkbox"
              :checked="project.info.photo"
              @click="project.info.photo = !project.info.photo"
            />
            <img
              src="~/assets/icons/photo.png"
              alt="photo"
              class="src"
              width="20vw"
            />
            <label>Photo</label>
          </div>
          <div class="flex gap-2 items-center">
            <input
              type="checkbox"
              :checked="project.info.video"
              @click="project.info.video = !project.info.video"
            />
            <img
              src="~/assets/icons/video.png"
              alt="video"
              class="src"
              width="20vw"
            />
            <label>Video</label>
          </div>
          <div class="flex gap-2 items-center">
            <input
              type="checkbox"
              :checked="project.info.release"
              @click="project.info.release = !project.info.release"
            />
            <img
              src="~/assets/icons/release.png"
              alt="release"
              class="src"
              width="20vw"
            />
            <label>Release</label>
          </div>
        </div>
      </div>
    </div>
    <!-- {{ project.indicator }} -->
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";
import { uniquePartner } from "~/helpers/array";

const { project } = useProject();
const { trace } = useTrace();
const { data: ProgramIndicator, status } = await useFetch(
  `${BASE_URL}/indicator/${trace.value.ProgramId}`
);
</script>
