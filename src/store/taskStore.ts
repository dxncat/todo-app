
import { Task } from '@/interfaces';
import { create } from 'zustand';
import { persist } from "zustand/middleware";

interface State {
    tasks: Task[];

    getTasksNumber: () => number;
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
    updateTask: (id: string, updatedTask: Partial<Task>) => void;
    completeTask: (id: string) => void;
    setUncompletedTask: (id: string) => void;

}

export const useTaskStore = create<State>()(
    persist(
        (set, get) => ({

            tasks: [],

            getTasksNumber: () => {
                const { tasks } = get();
                return tasks.length;
            },

            addTask: (task: Task) => {
                const { tasks } = get();

                const existingTask = tasks.some(
                    (taskItem) => taskItem.title === task.title && taskItem.description === task.description
                )

                if (!existingTask) {
                    set({ tasks: [...tasks, task] });
                    return;
                }

            },

            removeTask: (id: string) => {
                const { tasks } = get();

                const updatedTasks = tasks.filter(
                    (task) => task.id !== id
                )

                set({ tasks: updatedTasks });
            },

            updateTask: (id: string, updatedTask: Partial<Task>) => {
                const { tasks } = get();
                set({
                    tasks: tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task)
                });
            },

            completeTask: (id: string) => {
                const { tasks } = get();
                const updatedTasks = tasks.map(task => {
                    if (task.id === id) {
                        return {
                            ...task,
                            completed: true,
                            completedAt: new Date()
                        }
                    }
                    return task;
                })
                set({ tasks: updatedTasks });
            },

            setUncompletedTask: (id: string) => {
                const { tasks } = get();
                const updatedTasks = tasks.map(task => {
                    if (task.id === id) {
                        return {
                            ...task,
                            completed: false,
                            completedAt: undefined
                        }
                    }
                    return task;
                })
                set({ tasks: updatedTasks });
            }

        }),

        {
            name: 'tasks-storage'
        }
    )
)