<template>
  <div class="flex flex-row h-screen" @mouseup="mouseUp" @mousemove="sidebarResizer">
    <ClientOnly>
      <div id="sideNavbar" class="flex flex-col w-72 shrink-0 max-sm:hidden">
        <h1 class="py-3 pl-5 font-bold text-gray-700 dark:text-gray-200">Email Hub</h1>
        <VerticalNavigation />
      </div>
      <div
        id="resizer"
        class="cursor-col-resize border-r border-gray-200 dark:border-gray-800 w-1 max-sm:hidden"
        @mouseup="mouseUp"
        @mousedown="mouseDown"
      ></div>
    </ClientOnly>
    <div class="flex flex-col flex-grow">
      <div>
        <HorizontalNavigation
          class="px-3 border-b border-gray-200 dark:border-gray-800"
        />
      </div>
      <div class="flex-grow overflow-y-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let isResizable = false;
let sideNavbarEle: null | HTMLElement = null;

onMounted(() => {
  sideNavbarEle = document.getElementById("sideNavbar");
});

function mouseDown() {
  isResizable = true;
}

function mouseUp() {
  isResizable = false;
}

function sidebarResizer(event: MouseEvent) {
  if (!isResizable) return;
  if (event.x > 150 && event.x < 500) updateSidebarSize(event.x);
  else if (event.x < 200) updateSidebarSize(200);
  else updateSidebarSize(500);
}

function updateSidebarSize(size: number) {
  sideNavbarEle!.style.flexBasis = `${size}px`;
}
</script>
