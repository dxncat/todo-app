import { Filter, Flag, FlagOff, SquareCheckBig } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface Props {
    setFiltro: (filter: "all" | "completed" | "incomplete") => void;
}

export function TasksFilter({ setFiltro }: Props) {

    return (
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
    )
}