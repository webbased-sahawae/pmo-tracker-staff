<template>
  <div class="w-full">
    <div
      class="flex border-b-2 border-b-dprimary w-full flex justify-between px-2 font-bold"
    >
      <div>Latest Activities</div>
      <div
        class="text-sm cursor-pointer rounded-2xl px-2 border-x-2 border-x-dprimary"
      >
        <div>Search |<input class="border-transparent" /></div>
      </div>
    </div>
    <div class="flex flex-col gap-2 p-2 h-full overflow-y-auto">
      <GeneralReportCardsActivity />
      <GeneralReportCardsActivity />
      <GeneralReportCardsActivity />
      <GeneralReportCardsActivity />
      <GeneralReportCardsActivity />
      <GeneralReportCardsActivity />
    </div>
  </div>
</template>
