<template>
  <div>
    <UTable :columns="emailListColumns" :rows="emailList" />
  </div>
</template>

<script setup lang="ts">
const emailList: any = ref([]);
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
</script>
