<template>
  <div>
    <Head
      ><Title>
        {{ PartnerDetail?.name }}
      </Title>
    </Head>
    <FormsProject />
  </div>
</template>
<script setup>
import { BASE_URL } from "~/constants/urls";

const { trace } = useTrace();

const { data: PartnerDetail, status } = await useFetch(
  `${BASE_URL}/partner/${trace.value.PartnerId}`
);
</script>
