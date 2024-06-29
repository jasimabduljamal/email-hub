<template>
  <div class="h-12 flex">
    <ClientOnly>
      <div class="my-auto sm:hidden">
        <UButton
          icon="i-heroicons-bars-3"
          color="gray"
          variant="ghost"
          @click="isHamMenuOpen = true"
        />
      </div>
    </ClientOnly>
    <span class="pl-3 my-auto font-bold">{{ getRouteName }}</span>
  </div>
</template>

<script setup lang="ts">
const isHamMenuOpen = useToggleSideBar();
const { currentRoute } = useRouter();

const getRouteName = computed(() => {
  if (currentRoute.value.name == "apikeys")
    return `${currentRoute.value
      .name!.toString()
      .slice(0, 3)
      .toUpperCase()} ${currentRoute.value
      .name!.toString()
      .charAt(3)
      .toUpperCase()}${currentRoute.value.name!.toString().slice(4, 7)}`;
  return (
    currentRoute.value.name!.toString().charAt(0).toUpperCase() +
    currentRoute.value.name!.toString().slice(1)
  );
});
</script>
