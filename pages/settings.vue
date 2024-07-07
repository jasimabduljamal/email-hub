<template>
  <UContainer>
    <UCard class="my-10">
      <template #header>
        <h1>Configure App Settings</h1>
      </template>
      <div class="flex justify-between">
        <h1>Choose theme</h1>
        <USelectMenu
          v-model="$colorMode.preference"
          :options="['system', 'light', 'dark']"
        />
      </div>
    </UCard>
  </UContainer>
</template>
