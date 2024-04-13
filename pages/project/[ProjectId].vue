<template>
  <div>
    <div
      v-if="imageUpload"
      class="fixed inset-0 bg-opacity-25 w-[100vw] h-[100vh] flex items-center bg-white justify-center"
    >
      <div
        class="bg-white rounded-2xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
      >
        <div
          class="p-2 flex w-[100%] justify-between"
          @click.prevent="
            () => {
              imageUpload = false;
            }
          "
        >
          <h2 class="uppercase text-center w-full">Upload Logo</h2>
          <IconsCross
            class="cursor-pointer hover:text-red-500 hover:font-bold"
            width="1em"
            @click.prevent="
              () => {
                imageUpload = false;
              }
            "
          />
        </div>
        <div class="pb-2">
          <FormsImage :ProjectId="ProjectId" @setModal="updateModalValue" />
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-center xl:flex-row xl:items-start xl:justify-center gap-2 overflow-hidden w-[100vw]"
    >
      <div
        :class="`border-4 duration-1000 xl:max-w-[50vw] rounded-2xl p-2 w-[100vw]`"
      >
        <div class="flex w-full gap-4 my-2 w-[50%]">
          <div class="buttonAdd px-2" style="width: 100%">Edit</div>
          <div
            class="buttonDelete px-2"
            style="width: 100%"
            @click="
              () => {
                deleteProject();
              }
            "
          >
            Delete
          </div>
        </div>
        <!-- {{ ProjectDetail }} -->
        <div class="flex flex-col gap-2">
          <div class="flex items-center px-4">
            <img
              :src="`${
                ProjectDetail.image
                  ? `${BASE_URL}/project/image/${ProjectId}`
                  : KADIN_LOGO
              }`"
              class="h-[10vh] w-[10vw] object-contain rounded-2xl"
              @click.prevent="
                () => {
                  imageUpload = true;
                }
              "
            />
            <div class="flex flex-col xl:flex-row">
              <div class="leading-none">
                <h1>
                  {{ ProjectDetail.title }}
                </h1>
                <h3 :class="`${projectStatus().text}`">
                  {{ projectStatus().title }}
                </h3>
                <p class="text-sm italic">{{ ProjectDetail.Category.name }}</p>
                <div class="flex items-center gap-1 font-bold">
                  <IconsLocation width="1em" />{{ ProjectDetail.location }}
                </div>
                <div class="flex items-center gap-1">
                  <IconsCalendar width="1em" />{{
                    dates(ProjectDetail.start, ProjectDetail.end).date
                  }}
                </div>
                <div
                  class="flex items-center mt-1 gap-1 cursor-pointer hover:font-bold"
                >
                  <img
                    src="https://mailmeteor.com/logos/assets/PNG/Google_Drive_Logo_512px.png"
                    class="h-4 object-conatain"
                  />Drive
                </div>
              </div>
            </div>
          </div>
          <div class="xl:hidden block">
            <div
              v-if="!detailOpen"
              class="cursor-pointer flex gap-1 hover:text-green-500"
              @click.prevent="detailOpen = !detailOpen"
            >
              <IconsInformation width="1em" /> More detail ...
              {{ detailOpen }}
            </div>
            <div
              v-if="detailOpen"
              class="cursor-pointer flex gap-1 hover:text-red-500"
              @click.prevent="detailOpen = !detailOpen"
            >
              <IconsInformation width="1em" /> Less detail ...
              {{ detailOpen }}
            </div>
          </div>
          <div :class="`flex flex-col gap-2`">
            <div>
              <h2>Background</h2>

              <div class="text-justify">
                <p>{{ ProjectDetail.background }}</p>
              </div>
            </div>
            <div>
              <h2
                @click.prevent="
                  () => {
                    rundownExpand = !rundownExpand;
                  }
                "
              >
                Rundowns
              </h2>
              <div class="overflow-auto p-2">
                <ClientOnly>
                  <table class="border-2 w-[100vw]">
                    <tr class="border-2">
                      <th>Date</th>
                      <th>Time</th>
                      <th>Agenda</th>
                      <th>Location</th>
                      <th>Speaker</th>
                      <th>Notes</th>
                    </tr>
                    <tr
                      v-for="rundown in ProjectDetail.ProjectRundowns"
                      :key="rundown.id"
                    >
                      <td class="border-2 w-fit text-nowrap p-2">
                        {{
                          new Date(rundown.start).toLocaleString("default", {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                          })
                        }}
                      </td>
                      <td class="border-2 w-fit text-nowrap p-2">
                        {{
                          new Date(rundown.start).toLocaleString("default", {
                            timeStyle: "short",
                            hour12: false,
                          })
                        }}
                        -
                        {{
                          new Date(rundown.end).toLocaleString("default", {
                            timeStyle: "short",
                            hour12: false,
                          })
                        }}
                      </td>
                      <td class="border-2 font-bold p-2">
                        {{ rundown.title }}
                      </td>
                      <td class="border-2 text-pretty p-2">
                        {{ rundown.location }}
                      </td>
                      <td class="border-2 text-pretty">
                        {{ rundown.speaker }}
                      </td>
                      <td class="border-2 text-center">{{ rundown.notes }}</td>
                    </tr>
                  </table>
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-4 xl:w-[25vw] hidden xl:block rounded-2xl p-2">
        <div
          class="buttonAdd"
          @click.prevent="
            () => {
              trace.ProjectId = ProjectId;
              navigateTo('/activity/add');
            }
          "
        >
          + Activity
        </div>
        <CardsProjectActivity />
      </div>
      <!-- {{ ProjectDetail }} -->
    </div>
  </div>
</template>
<script setup>
import { BASE_URL, KADIN_LOGO } from "~/constants/urls";

const { trace } = useTrace();
const { ProjectId } = useRoute().params;
const detailOpen = ref(false);
const imageUpload = ref(false);
const rundownExpand = ref(false);
const updateModalValue = (value) => {
  console.log("emits?");
  imageUpload.value = value;
};
const { data: ProjectDetail } = await useFetch(
  `${BASE_URL}/project/${ProjectId}`
);

const dates = (startTime, endTime) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const result = {};
  if (
    start.getMonth() == end.getMonth() &&
    start.getFullYear() == end.getFullYear()
  ) {
    result.date = `${
      start.getDate() == end.getDate()
        ? start.getDate()
        : `${start.getDate()} - ${end.getDate()}`
    } ${start.toLocaleDateString("id-ID", {
      month: "long",
      year: "numeric",
    })}`;
  } else {
    if (start.getFullYear() == end.getFullYear()) {
      result.date = `${start.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
      })} - ${end.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`;
    } else {
      result.date = `${start.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })} - ${end.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}`;
    }
  }
  return { date: result.date };
};

const projectStatus = () => {
  if (ProjectDetail.value.status > 80)
    return {
      BarColor: "accent-green-500",
      title: "Very Impactful",
      text: "text-green-500",
      border: "border-green-500",
    };
  else if (ProjectDetail.value.status > 40)
    return {
      BarColor: "accent-orange-500",
      text: "text-orange-500",
      title: "Highly Impactful",
      border: "border-orange-500",
    };
  else
    return {
      BarColor: "accent-gray-500",
      text: "text-gray-500",
      title: "Impactful",
      border: "border-gray-500",
    };
};

const deleteProject = async () => {
  try {
    await useFetch(`${BASE_URL}/project/${ProjectId}`, {
      method: "delete",
      watch: false,
    });
    await navigateTo(`/program/${trace.value.PartnerId}`);
  } catch (error) {
    console.log(error);
  }
};
onMounted(async () => {
  trace.value.ProjectId = ProjectId;
});
</script>
