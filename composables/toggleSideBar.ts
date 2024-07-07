let isHamMenuOpen = ref(false);
let isNavCollapsed = ref(false);
export const useToggleSideBar = () => {
  return isHamMenuOpen;
};

export const useNavCollapser = () => {
  return isNavCollapsed;
};
