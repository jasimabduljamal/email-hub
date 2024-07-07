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
          <div class="ml-3 flex items-center">
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              @click="isHamMenuOpen = false"
            />
            <div class="flex flex-row items-center py-3 pl-5">
              <UIcon class="size-7" name="i-heroicons-inbox-stack" />
              <h3 class="pl-3 font-bold text-gray-700 dark:text-gray-200">Email Hub</h3>
            </div>
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
  >
    <template #default="{ link }">
      <span v-if="isNavCollapsed" class="group-hover:text-primary relative">{{
        link.label
      }}</span>
    </template>
    <template #icon="{ link }">
      <UIcon :name="link.icon" />
    </template>
  </UVerticalNavigation>
</template>

<script setup lang="ts">
const isHamMenuOpen = useToggleSideBar();
const isNavCollapsed = useNavCollapser();
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
      label: "Audience",
      icon: "i-heroicons-users",
      to: "/audience",
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
