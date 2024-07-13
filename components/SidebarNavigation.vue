<template>
  <ClientOnly>
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

          <!-- <UVerticalNavigation
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
          /> -->
          <div class="flex flex-col h-full justify-between">
            <ul class="px-3 pb-3 flex flex-col gap-1.5">
              <li v-for="link in links" @click="isHamMenuOpen = false">
                <NuxtLink
                  class="group flex items-center gap-1.5 py-2 px-2.5 w-full rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                  :to="link.to"
                >
                  <UIcon class="w-5 h-5" :name="link.icon" />
                  <span class="truncate relative" v-if="!isNavCollapsed">{{
                    link.label
                  }}</span>
                </NuxtLink>
              </li>
            </ul>
            <ul class="px-3 pb-3 flex flex-col gap-1.5">
              <li
                v-if="secondaryLinks.length > 0"
                v-for="link in secondaryLinks"
                @click="isHamMenuOpen = false"
              >
                <NuxtLink
                  class="group flex items-center gap-1.5 py-2 px-2.5 w-full rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                  :to="link.to"
                >
                  <UIcon class="w-5 h-5" :name="link.icon" />
                  <span class="truncate relative" v-if="!isNavCollapsed">{{
                    link.label
                  }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </UCard>
      </USlideover>
    </div>
  </ClientOnly>
  <nav
    id="sideNavbar"
    class="flex flex-col max-sm:hidden shrink-0 transition-[width] ease duration-500"
    :style="{ width: isNavCollapsed ? '65px' : '240px' }"
  >
    <div class="flex flex-row items-center py-3 pl-4">
      <UIcon class="size-8" name="i-heroicons-inbox-stack" />
      <h1 v-if="!isNavCollapsed" class="pl-3 font-bold text-gray-700 dark:text-gray-200">
        Email Hub
      </h1>
    </div>
    <div class="flex flex-col h-screen justify-between">
      <ul class="px-3 pb-3 flex flex-col gap-1.5">
        <li v-for="link in links">
          <NuxtLink
            class="flex items-center gap-1.5 py-2 px-2.5 w-full rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
            :to="link.to"
          >
            <UTooltip
              :text="link.label"
              :prevent="!isNavCollapsed"
              :popper="{ placement: 'right' }"
            >
              <UIcon class="w-5 h-5" :name="link.icon" />
            </UTooltip>
            <span class="truncate relative" v-if="!isNavCollapsed">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
      <ul class="px-3 pb-3 flex flex-col gap-1.5">
        <li v-if="secondaryLinks.length > 0" v-for="link in secondaryLinks">
          <NuxtLink
            class="flex items-center gap-1.5 py-2 px-2.5 w-full rounded-md font-medium text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
            active-class="text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
            :to="link.to"
          >
            <UTooltip
              :text="link.label"
              :prevent="!isNavCollapsed"
              :popper="{ placement: 'right' }"
            >
              <UIcon class="w-5 h-5" :name="link.icon" />
            </UTooltip>
            <span class="truncate relative" v-if="!isNavCollapsed">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isHamMenuOpen = useToggleSideBar();
const isNavCollapsed = useNavCollapser();
const links = [
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
    label: "Webhooks",
    icon: "i-heroicons-arrows-up-down",
    to: "/webhooks",
  },
  {
    label: "API Keys",
    icon: "i-heroicons-key",
    to: "/apikeys",
  },
  {
    label: "Audience",
    icon: "i-heroicons-users",
    to: "/audience",
  },
];

const secondaryLinks = [
  {
    label: "Settings",
    icon: "i-heroicons-adjustments-horizontal",
    to: "/settings",
  },
];
</script>
<style scoped></style>
