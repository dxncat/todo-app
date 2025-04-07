import { Task } from "@/interfaces";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuItem } from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { FlagOff, MoreHorizontal, PenLine, SquareCheckBig, Trash } from "lucide-react";
import { useTaskStore } from "@/store/taskStore";

interface Props {
    task: Task
}
export function ItemActions({ task }: Props) {

    const removeTask = useTaskStore((state) => state.removeTask)
    const completeTask = useTaskStore((state) => state.completeTask)
    const setUncompletedTask = useTaskStore((state) => state.setUncompletedTask)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className="cursor-pointer">
                    <MoreHorizontal className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    Acciones
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    task.completed ? (
                        <DropdownMenuItem
                            className="cursor-pointer hover:bg-red-500 hover:text-white"
                            onClick={() => setUncompletedTask(task.id)}
                        >
                            <FlagOff className="text-red-500" />
                            <span className="text-red-500">Marcar como incompleta</span>
                        </DropdownMenuItem>
                    ) : (
                        <DropdownMenuItem
                            className="cursor-pointer hover:bg-green-600 hover:text-white"
                            onClick={() => completeTask(task.id)}
                        >
                            <SquareCheckBig className="text-green-500" />
                            <span className="text-green-500">Marcar como completa</span>
                        </DropdownMenuItem>
                    )
                }
                <DropdownMenuItem
                    className="cursor-pointer hover:bg-blue-600 hover:text-white"
                    onClick={() => console.log(task.id)}
                >
                    <PenLine className="text-blue-500" />
                    <span className="text-blue-500">Editar</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => removeTask(task.id)}
                >
                    <Trash className="text-red-500" />
                    <span className="text-red-500">Eliminar</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}