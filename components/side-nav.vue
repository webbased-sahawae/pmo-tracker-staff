<template>
  <div class="py-4 rounded-se-2xl bg-dprimary flex flex-col h-full w-full">
    <div
      class="text-nowrap text-secondary cursor-pointer border-y-dprimary hover:text-primary hover:border-y-[#FFF] duration-1000 border-y-2 px-4"
      @click="
        () => {
          navigateTo('/tracker/general-report');
        }
      "
    >
      General Report
    </div>
    <div
      class="text-nowrap text-secondary cursor-pointer border-y-dprimary hover:text-primary hover:border-y-[#FFF] duration-1000 border-y-2 px-4"
      @click="
        () => {
          navigateTo('/tracker/assignment');
        }
      "
    >
      Assignment
    </div>
  </div>
</template>
