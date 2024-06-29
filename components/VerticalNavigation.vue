<template>
  <div>
    <USlideover v-model="isHamMenuOpen" side="left" :ui="{ width: 'max-w-xs' }">
      <UCard
        class="flex flex-col flex-1"
        :ui="{
          body: { base: 'flex-1' },
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="pl-5 font-bold text-gray-700 dark:text-gray-200">Email Hub</h3>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              @click="isHamMenuOpen = false"
            />
          </div>
        </template>

        <UVerticalNavigation
          :links="links"
          :ui="{
            wrapper: 'flex flex-col justify-between',
            divider: {
              wrapper: {
                base: 'hidden',
              },
            },
            base: 'py-2',
          }"
          class="px-3 pb-3 h-screen"
          @click="isHamMenuOpen = false"
        />
      </UCard>
    </USlideover>
  </div>
  <UVerticalNavigation
    :links="links"
    :ui="{
      wrapper: 'flex flex-col justify-between',
      divider: {
        wrapper: {
          base: 'hidden',
        },
      },
      base: 'py-2',
    }"
    class="px-3 pb-3 h-screen"
  />
</template>

<script setup lang="ts">
const isHamMenuOpen = useToggleSideBar();
const links = [
  [
    {
      label: "Emails",
      icon: "i-heroicons-envelope",
      to: "/emails",
    },
    {
      label: "Metrics",
      icon: "i-heroicons-presentation-chart-line",
      to: "/metrics",
    },
    {
      label: "API Keys",
      icon: "i-heroicons-key",
      to: "/apikeys",
    },
    {
      label: "Webhooks",
      icon: "i-heroicons-arrows-up-down",
      to: "/webhooks",
    },
    {
      label: "Settings",
      icon: "i-heroicons-adjustments-horizontal",
      to: "/settings",
    },
  ],
  [
    {
      label: "Examples",
      icon: "i-heroicons-light-bulb",
    },
    {
      label: "Help",
      icon: "i-heroicons-question-mark-circle",
    },
  ],
];
</script>
