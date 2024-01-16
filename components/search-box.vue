<template>
  <div class="relative">
    <input
      @focus="searcValueBox = true"
      type="text"
      list="browsers"
      class="w-full"
      :value="search"
      @keyup="
        (e) => {
          searchFuntion(e.target.value);
          search = e.target.value;
          ``;
        }
      "
    />
    <div
      :class="`flex flex-col mt-2 absolute child bg-white w-full  ${
        !searchResult?.value?.length && 'hidden'
      }  ${
        !searcValueBox && 'hidden'
      } rounded-2xl max-h-[25vw] overflow-scroll`"
    >
      <div
        v-for="item in searchResult.value"
        class="whitespace-normal hover:bg-blue-700 hover:text-white hover:cursor-pointer px-4 rounded-full duration-500"
        @click="chooseResult(item)"
      >
        <span class="font-bold">
          {{ item.name }}
        </span>
        <div class="italic">{{ item.chief }}</div>
      </div>
    </div>
    {{ searchResult?.value?.length }}
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { apiRoute, setValue } = defineProps(["apiRoute", "setValue"]);
const search = ref("");
const searchResult = ref([]);
const searchFuntion = async (searchValue) => {
  const { data: partners, status } = await useFetch(
    `${BASE_URL}${apiRoute}${searchValue}`
  );
  searchResult.value = partners;
};
const searcValueBox = ref(false);

const chooseResult = (item) => {
  setValue.push(item);
  console.log(setValue);
};
</script>
