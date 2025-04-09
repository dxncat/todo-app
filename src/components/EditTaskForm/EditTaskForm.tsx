import { useUiStore } from "@/store/uiStore";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useState, useEffect } from "react";
import { useTaskStore } from "@/store/taskStore";

export function EditTaskForm() {
    const isTaskFromUpdateOpen = useUiStore((state) => state.isTaskFromUpdateOpen);
    const closeEditTaskForm = useUiStore((state) => state.closeTaskFormUpdate);
    const selectedTask = useUiStore((state) => state.selectedTask);
    const updateTask = useTaskStore((state) => state.updateTask);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [error, setError] = useState<string>("");

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title);
            setDescription(selectedTask.description);
        }
    }, [selectedTask]);

    const handleUpdateTask = () => {
        if (!selectedTask) return;

        if (title.trim() === "" || description.trim() === "") {
            setError("Por favor completa todos los campos");
            return;
        }

        updateTask(selectedTask.id, {
            title,
            description,
        });
        setTitle("");
        setDescription("");
        setError("");
        closeEditTaskForm();
    };

    return (
        <Dialog
            open={isTaskFromUpdateOpen}
            onOpenChange={(open) => {
                if (!open) closeEditTaskForm();
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Editar tarea ID: {selectedTask?.id}</DialogTitle>
                    <DialogDescription>Modifica los campos para actualizar la tarea.</DialogDescription>
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
                        <Button variant="outline" onClick={closeEditTaskForm}>
                            Cancelar
                        </Button>
                        <Button onClick={handleUpdateTask}>Guardar</Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}