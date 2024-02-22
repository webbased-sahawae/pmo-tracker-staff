<template>
  <div class="flex flex-col gap-2">
    <SearchSinergy
      :set-value="project.sinergy"
      :api-route="'/partner/search/'"
      title-field="name"
      description-field="chief"
    />
    <div>
      <div v-for="institution in institutionList">
        {{ institution.name }}
        <div
          v-for="(partner, index) in project.sinergy.filter(
            (el) => !el.deletedAt && el.InstitutionId == institution.id
          )"
          @click="
            () => {
              partner.deletedAt = new Date();
            }
          "
        >
          <div class="flex flex-wrap">
            <CardsPartner :PartnerId="partner.id" />
          </div>
        </div>
      </div>
    </div>
    <!-- {{ institutionList }} -->
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { project } = useProject();

const { data: institutionList, status } = await useFetch(
  `${BASE_URL}/institution`
);
</script>
