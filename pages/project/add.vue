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

const {
  data: ProgramDetail,
  pending,
  error: ProgramDetailError,
} = await useFetch(`${BASE_URL}/program/${trace.value.ProgramId}`);
// PartnerProgram = ProgramDetail.value;

const { data: PartnerDetail, status } = await useFetch(
  `${BASE_URL}/partner/${trace.value.PartnerId}`
);

const activeTab = useState("tab", () => "info");
</script>
