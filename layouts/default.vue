<template>
  <div
    class="flex flex-row h-screen w-screen"
    @mouseup="mouseUp"
    @mousemove="sidebarResizer"
  >
    <!-- <div class="flex flex-row h-screen w-screen"> -->
    <SidebarNavigation />
    <div
      id="resizer"
      class="relative cursor-col-resize shrink-0 border-r border-gray-200 dark:border-gray-800 w-1 max-sm:hidden"
      @mouseup="mouseUp"
      @mousedown="mouseDown"
    >
      <!-- <div
      id="resizer"
      class="relative border-r border-gray-200 dark:border-gray-800 max-sm:hidden"
    > -->
      <UButton
        class="absolute bottom-7 -left-3.5 bg-gray-200 dark:bg-gray-800 rounded-full"
        :icon="
          !isNavCollapsed
            ? 'i-heroicons-chevron-double-left'
            : 'i-heroicons-chevron-double-right'
        "
        size="sm"
        color="gray"
        square
        variant="link"
        @click.stop="toggleNavCollapser"
      />
    </div>
    <div class="flex flex-col flex-grow overflow-hidden">
      <div>
        <HorizontalNavigation
          class="px-3 border-b border-gray-200 dark:border-gray-800"
        />
      </div>
      <div class="overflow-auto px-5 py-5">
        <slot />
      </div>
      <!-- <div class="flex-grow overflow-auto">
        <div class="p-5">
          <slot />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
let isNavCollapsed = useNavCollapser();

let isResizable = false;
let sideNavbarEle: null | HTMLElement = null;

onMounted(() => {
  sideNavbarEle = document.getElementById("sideNavbar");
});

function toggleNavCollapser() {
  isNavCollapsed.value = !isNavCollapsed.value;
}

function mouseDown() {
  isResizable = true;
}

function mouseUp() {
  isResizable = false;
}

function sidebarResizer(event: MouseEvent) {
  if (!isResizable) return;
  if (event.x > 150 && event.x < 300) updateSidebarSize(event.x);
  else if (event.x < 150) updateSidebarSize(150);
  else updateSidebarSize(300);
}

function updateSidebarSize(size: number) {
  sideNavbarEle!.style.width = `${size}px`;
}
</script>
