import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { useTaskStore } from "./store/taskStore"
import { Plus, SquareCheckBig } from "lucide-react"
import { TasksFilter, TaskTable } from "./components"
import { Button } from "./components/ui/button"

function App() {

  const addTask = useTaskStore((state) => state.addTask)
  const tasks = useTaskStore((state) => state.tasks)

  const [filtro, setFiltro] = useState<"all" | "completed" | "incomplete">("all")

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
    if (filtro === "completed") return task.completed
    if (filtro === "incomplete") return !task.completed
    return true // "all"
  })

  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-8">
        <SquareCheckBig className="size-12" />
        <h1 className="text-5xl">ToDo App</h1>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl">Tareas pendientes</h2>
        <div className="flex items-center gap-4">

          <TasksFilter setFiltro={setFiltro} />

          <Button className="cursor-pointer">
            <Plus />
            Nueva tarea
          </Button>
        </div>
      </div>

      <TaskTable tasks={tareasFiltradas} />
    </>
  )
}

export default App
