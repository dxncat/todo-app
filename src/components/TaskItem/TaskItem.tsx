import { Task } from "@/interfaces";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { ItemActions } from "../ItemActions/ItemActions";
import { formatDate } from "@/lib";

interface Props {
    tasks: Task[];
}

export function TaskItem({ tasks }: Props) {
    return (
        <TableBody>
            {
                tasks.map((task) => (
                    <TableRow key={task.id}>
                        <TableCell className="font-medium">{task.title}</TableCell>
                        <TableCell className="hidden md:table-cell">{task.description}</TableCell>
                        <TableCell className="hidden sm:table-cell">
                            {formatDate(task.createdAt)}
                        </TableCell>
                        <TableCell>
                            <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${task.completed ? "text-green-600" : "bg-yellow-100 text-yellow-800"
                                    }`}
                            >
                                {task.completed
                                    ? task.completedAt
                                        ? `Completada el ${formatDate(task.completedAt)}`
                                        : "Completada"
                                    : "No completado"}
                            </span>
                        </TableCell>
                        <TableCell><ItemActions task={task} /></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
}