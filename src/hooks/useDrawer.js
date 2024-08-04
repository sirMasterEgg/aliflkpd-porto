import { create } from "zustand";

export const useDrawer = create((set) => {
  return {
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
  };
});
