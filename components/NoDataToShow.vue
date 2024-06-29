<template>
  <UContainer>
    <UCard class="mt-10">
      <div class="flex flex-col h-80 items-center text-center justify-center gap-4">
        <h1 class="text-xl font-bold">{{ props.heading }}</h1>
        <span class="text-sm max-w-md font-normal">
          {{ props.description }}
        </span>
      </div>
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">
const props = defineProps(["heading", "description"]);
</script>
