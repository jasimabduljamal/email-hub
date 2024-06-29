<template>
  <NoDataToShow :heading="noData.heading" :description="noData.description" />
  <NoDataToShow :heading="noData.heading" :description="noData.description" />
  <NoDataToShow :heading="noData.heading" :description="noData.description" />
  <NoDataToShow :heading="noData.heading" :description="noData.description" />
  <NoDataToShow :heading="noData.heading" :description="noData.description" />
</template>

<script setup lang="ts">
const noData = ref({
  heading: "You haven't sent any emails yet",
  description:
    "Once you start sending emails, you'll get detailed insight and content preview for every message.",
});
</script>
