export const useToggleSideBar = () => {
  return useState("isHamMenuOpen", () => false);
};

export const useNavCollapser = () => {
  return useState("isNavCollapsed", () => false);
};
