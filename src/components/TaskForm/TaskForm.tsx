import { useUiStore } from "@/store/uiStore"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { useState } from "react"
import { useTaskStore } from "@/store/taskStore"
import { v4 } from "uuid"

export function TaskForm() {

    const isTaskFormOpen = useUiStore((state) => state.isTaskFormOpen)
    const closeTaskForm = useUiStore((state) => state.closeTaskForm)
    const addTask = useTaskStore((state) => state.addTask)

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [error, setError] = useState<string>("")

    const handleCreateTask = () => {
        if (title.trim() === "" || description.trim() === "") {
            setError("Por favor completa todos los campos")
            return
        }

        const task = {
            id: v4(),
            title,
            description,
            completed: false,
            createdAt: new Date(),
        }

        addTask(task)
        closeTaskForm()
        setTitle("")
        setDescription("")
        setError("")
    }

    return (
        <Dialog
            open={isTaskFormOpen}
            onOpenChange={(open) => {
                if (!open) closeTaskForm()
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crear nueva tarea</DialogTitle>
                    <DialogDescription>Completa los campos para crear una nueva tarea.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Título</Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Ingresa el título de la tarea"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Descripción</Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Ingresa una descripción detallada"
                            rows={4}
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
                <DialogFooter>
                    <div className="flex justify-between w-full">
                        <Button variant="outline" onClick={closeTaskForm}>
                            Cancelar
                        </Button>
                        <Button onClick={handleCreateTask}>Crear</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}