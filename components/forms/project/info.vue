<template>
  <div class="">
    <div class="flex gap-2 flex-col">
      <div class="flex flex-col">
        <label>Project name</label
        ><input
          class="px-2"
          placeholder="Project name"
          :value="project.project.title"
          @keyup="
            (e) => {
              project.project.title = e.target.value;
            }
          "
        />
      </div>
      <div class="flex flex-col">
        <label>Venue</label
        ><input
          class="px-2"
          placeholder="Venue"
          :value="project.project.location"
          @keyup="
            (e) => {
              project.project.location = e.target.value;
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
          :value="project.project.type"
          @change="
            (e) => {
              project.project.CategoryId = e.target.value;
            }
          "
        >
          <option disabled selected>Please choose the project type</option>
          <option v-for="item in categories" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col">
        <div class="flex gap-4 p-2 flex-wrap">
          <div class="flex">
            <h3 class="me-2">Start</h3>
            <div>
              <input
                class="px-2"
                type="datetime-local"
                :value="project.project.start"
                @change="
                  (e) => {
                    project.project.start = e.target.value;
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
                :value="project.project.end"
                :min="project.project.start"
                @change="
                  (e) => {
                    project.project.end = e.target.value;
                  }
                "
              />
            </div>
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
              :checked="project.project.flyer"
              @click="project.project.flyer = !project.project.flyer"
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
              :checked="project.project.photo"
              @click="project.project.photo = !project.project.photo"
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
              :checked="project.project.video"
              @click="project.project.video = !project.project.video"
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
              :checked="project.project.release"
              @click="project.project.release = !project.project.release"
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
    <!-- {{ project.project.indicator }} -->
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { project } = useProject();

const { data: categories } = await useFetch(`${BASE_URL}/category`);
</script>
