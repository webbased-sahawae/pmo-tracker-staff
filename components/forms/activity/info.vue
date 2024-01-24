<template>
  <div class="">
    <div class="flex gap-2 flex-col">
      <div class="flex flex-col">
        <label>Project name</label
        ><input
          class="px-2"
          placeholder="Project name"
          :value="activity.info.title"
          @keyup="
            (e) => {
              activity.info.title = e.target.value;
            }
          "
        />
      </div>
      <div class="flex flex-col">
        <label>Venue</label
        ><input
          class="px-2"
          placeholder="Venue"
          :value="activity.info.location"
          @keyup="
            (e) => {
              activity.info.location = e.target.value;
            }
          "
        />
      </div>
      <div class="flex flex-col">
        <div>
          <label>Jenis Aktifitas</label>
        </div>
        <select
          name="activity"
          id="activity"
          :value="activity.info.type"
          @change="
            (e) => {
              activity.info.type = e.target.value;
            }
          "
        >
          <option disabled selected>Please choose the activity type</option>
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
                :value="activity.info.start"
                @change="
                  (e) => {
                    activity.info.start = e.target.value;
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
                :value="activity.info.end"
                :min="activity.info.start"
                @change="
                  (e) => {
                    activity.info.end = e.target.value;
                  }
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";
import { uniqueArray } from "~/helpers/array";

const { activity } = useActivity();
</script>
