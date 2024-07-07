<template>
  <div v-if="isEmailListLoading">
    <SkeletonLoaderTableLoader :rows="5" :columns="4" />
  </div>
  <div v-else-if="!isEmailListLoading && emailList.length === 0">
    <NoDataToShow :heading="noData.heading" :description="noData.description" />
  </div>
  <div v-else>
    <UTable :columns="emailListColumns" :rows="emailList" />
  </div>
</template>

<script setup lang="ts">
const noData = ref({
  heading: "You haven't sent any emails yet",
  description:
    "Once you start sending emails, you'll get detailed insight and content preview for every message.",
});

const emailList: any = ref([]);
let isEmailListLoading = ref(true);
const emailListColumns = [
  {
    key: "to",
    label: "To",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "subject",
    label: "Subject",
  },
  {
    key: "created_at",
    label: "Sent",
  },
];
const { data } = await useFetch("/api/emails");
emailList.value = data.value;
isEmailListLoading.value = false;
</script>
