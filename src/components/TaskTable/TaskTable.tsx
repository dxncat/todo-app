import {
    Table,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { TaskItem } from "../TaskItem/TaskItem"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { Task } from "@/interfaces"
import { useUiStore } from "@/store/uiStore"

interface Props {
    tasks: Task[]
}

export function TaskTable({ tasks }: Props) {

    const openTaskForm = useUiStore((state) => state.openTaskForm)

    if (tasks.length === 0) {
        return (
            <div className="rounded-md border p-8 text-center">
                <p className="text-muted-foreground text-lg mb-4">No hay tareas pendientes, intenta crear una nueva</p>
                <Button
                    className="cursor-pointer"
                    onClick={openTaskForm}
                >
                    <Plus />
                    Nueva tarea
                </Button>
            </div>
        )
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableCaption>Total de tareas: {tasks.length}</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Titulo</TableHead>
                        <TableHead className="hidden md:table-cell">Descripción</TableHead>
                        <TableHead className="hidden sm:table-cell">Creado</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Acciones</TableHead>
                    </TableRow>
                </TableHeader>
                <TaskItem tasks={tasks} />
            </Table>
        </div>
    )
}