import { useEffect } from "react"
import { v4 } from "uuid"
import { useTaskStore } from "./store/taskStore"
import { Plus, SquareCheckBig } from "lucide-react"
import { TaskTable } from "./components"
import { Button } from "./components/ui/button"

function App() {

  const addTask = useTaskStore((state) => state.addTask)

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

  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-8">
        <SquareCheckBig className="size-12" />
        <h1 className="text-5xl">ToDo App</h1>
      </div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl">Tareas pendientes</h2>
        <Button>
          <Plus />
          Nueva tarea
        </Button>
      </div>

      <TaskTable />
    </>
  )
}

export default App
