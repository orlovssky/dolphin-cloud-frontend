export const isTouchEnabled = () => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};
