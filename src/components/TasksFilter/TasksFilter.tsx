import { Filter, Flag, FlagOff, SquareCheckBig } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface Props {
    filtro: "all" | "completas" | "incompletas";
    setFiltro: (filter: "all" | "completas" | "incompletas") => void;
}

export function TasksFilter({ setFiltro, filtro }: Props) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='ghost' className="cursor-pointer">
                    {
                        filtro === "all" ? (
                            <>
                                <Filter className="size-4 " />
                                <span className="">Filtrar</span>
                            </>
                        ) : filtro === "completas" ? (
                            <>
                                <Filter className="size-4 text-green-500" />
                                <span className="text-green-500">Completas</span>
                            </>
                        ) : (
                            <>
                                <Filter className="size-4 text-red-500" />
                                <span className="text-red-500">Incompletas</span>
                            </>
                        )
                    }
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
                    onClick={() => setFiltro("completas")}
                >
                    <Flag className="text-green-500" />
                    <span className="text-green-500">Completas</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setFiltro("incompletas")}
                >
                    <FlagOff className="text-red-500" />
                    <span className="text-red-500">Incompletas</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}