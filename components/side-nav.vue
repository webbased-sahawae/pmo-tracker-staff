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
          navigateTo(
            '/tracker/assignment?PartnerId=8ca69da3-4f05-4768-8748-89a04a536aed'
          );
        }
      "
    >
      Assignment
    </div>
  </div>
</template>
