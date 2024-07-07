<template>
  <NoDataToShow :heading="noData.heading" :description="noData.description" />
</template>

<script setup lang="ts">
const noData = ref({
  heading: "You haven't configured any webhooks yet",
  description:
    "Once you configure a webhook, you'll be able to receive real-time updates about email events.",
});
</script>
