<template>
  <div class="relative overflow-x-auto">
    <table class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700">
      <tr v-for="row in props.rows" class="">
        <td v-for="col in props.columns" class="px-4 py-4">
          <USkeleton class="h-5 w-full" />
        </td>
      </tr>
    </table>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  rows: {
    type: Number,
    required: true,
  },
  columns: {
    type: Number,
    required: true,
  },
});
</script>
