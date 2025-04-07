import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { useTaskStore } from "./store/taskStore"
import { Filter, Flag, FlagOff, Plus, SquareCheckBig } from "lucide-react"
import { TaskTable } from "./components"
import { Button } from "./components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./components/ui/dropdown-menu"

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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className="cursor-pointer">
                <Filter className="size-4" />
                Filtrar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                Filtrar por:
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer hover:bg-blue-600 hover:text-white"
                onClick={() => setFiltro("all")}
              >
                <SquareCheckBig className="text-blue-500" />
                <span className="text-blue-500">Todas</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer hover:bg-green-600 hover:text-white"
                onClick={() => setFiltro("completed")}
              >
                <Flag className="text-green-500" />
                <span className="text-green-500">Completas</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => setFiltro("incomplete")}
              >
                <FlagOff className="text-red-500" />
                <span className="text-red-500">Incompletas</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
