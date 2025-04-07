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
                        <TableCell className="font-medium max-w-[150px] md:max-w-[200px]">
                            <div className="truncate" title={task.title}>
                                {task.title}
                            </div>
                        </TableCell>

                        <TableCell className="hidden md:table-cell max-w-[250px] lg:max-w-[400px]">
                            <div className="truncate" title={task.description}>
                                {task.description}
                            </div>
                        </TableCell>

                        <TableCell className="hidden sm:table-cell whitespace-nowrap w-[140px]">
                            {formatDate(task.createdAt)}
                        </TableCell>

                        <TableCell className="w-[140px] md:w-[160px]">
                            <span
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${task.completed ? "text-green-600" : "bg-red-500 text-white"
                                    }`}
                            >
                                {task.completed
                                    ? task.completedAt
                                        ? `Completada el ${formatDate(task.completedAt)}`
                                        : "Completada"
                                    : "No completado"}
                            </span>
                        </TableCell>

                        <TableCell className="w-[50px]">
                            <ItemActions task={task} />
                        </TableCell>

                    </TableRow>
                ))
            }
        </TableBody>
    )
}