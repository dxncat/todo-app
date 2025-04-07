import { Task } from "@/interfaces";
import { create } from "zustand";

interface State {
    isTaskFormOpen: boolean;
    isTaskFromUpdateOpen: boolean;
    selectedTask: Task | null;
    openTaskForm: () => void;
    openTaskFormUpdate: (task: Task) => void;
    closeTaskFormUpdate: () => void;
    setSelectedTask: (task: Task | null) => void;
}

export const useUiStore = create<State>((set) => ({

    isTaskFormOpen: false,
    openTaskForm: () => set({ isTaskFormOpen: true }),
    closeTaskForm: () => set({ isTaskFormOpen: false }),

    isTaskFromUpdateOpen: false,
    selectedTask: null,
    openTaskFormUpdate: (task: Task) => set({ isTaskFromUpdateOpen: true, selectedTask: task }),
    closeTaskFormUpdate: () => set({ isTaskFromUpdateOpen: false, selectedTask: null }),
    setSelectedTask: (task: Task | null) => set({ selectedTask: task }),
}))