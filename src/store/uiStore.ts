import { create } from "zustand";

interface State {
    isTaskFormOpen: boolean;
    isTaskFromUpdateOpen: boolean;
    openTaskForm: () => void;
    openTaskFormUpdate: () => void;
    closeTaskForm: () => void;
    closeTaskFormUpdate: () => void;
}

export const useUiStore = create<State>((set) => ({

    isTaskFormOpen: false,
    openTaskForm: () => set({ isTaskFormOpen: true }),
    closeTaskForm: () => set({ isTaskFormOpen: false }),

    isTaskFromUpdateOpen: false,
    openTaskFormUpdate: () => set({ isTaskFromUpdateOpen: true }),
    closeTaskFormUpdate: () => set({ isTaskFromUpdateOpen: false })
}))