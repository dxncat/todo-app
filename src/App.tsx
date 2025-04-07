import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { useTaskStore } from "./store/taskStore"
import { Plus, SquareCheckBig } from "lucide-react"
import { TaskForm, TasksFilter, TaskTable } from "./components"
import { Button } from "./components/ui/button"
import { useUiStore } from "./store/uiStore"

function App() {

  const addTask = useTaskStore((state) => state.addTask)
  const tasks = useTaskStore((state) => state.tasks)
  const openTaskForm = useUiStore((state) => state.openTaskForm)

  const [filtro, setFiltro] = useState<"all" | "completas" | "incompletas">("all")

  useEffect(() => {
    const task = {
      id: v4(),
      title: "Aprender React",
      description: "Estudiar los fundamentos de React",
      completed: false,
      createdAt: new Date()
    }

    addTask(task)
  }, [])

  const tareasFiltradas = tasks.filter((task) => {
    console.log(filtro)
    if (filtro === "completas") return task.completed
    if (filtro === "incompletas") return !task.completed
    return true // "all"
  })

  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-8">
        <SquareCheckBig className="size-12" />
        <h1 className="text-5xl">ToDo App</h1>
      </div>
      <h2 className="text-3xl mb-8">Tareas pendientes</h2>

      <div className="flex items-center justify-end gap-4 mb-4">

        <TasksFilter setFiltro={setFiltro} filtro={filtro} />

        <Button
          className="cursor-pointer"
          onClick={openTaskForm}
        >
          <Plus />
          Nueva tarea
        </Button>
      </div>

      <TaskTable tasks={tareasFiltradas} />
      <TaskForm />
    </>
  )
}

export default App
