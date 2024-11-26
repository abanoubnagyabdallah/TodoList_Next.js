"use client"
import { Trash } from "lucide-react"
import { Button } from "./ui/button"
import Spinner from "./Spinner"
import { deleteTodoAction } from "@/actions/todo.action"
import { useState } from "react"
import { TableCell } from "./ui/table"
import EditTodoDialog from "./EditTodoDialog"
import { ITodo } from "@/validation-schema"

export default function ActionButtons({ todo }: { todo: ITodo }) {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleDelete = async () => {
        setIsLoading(true)
        await deleteTodoAction({ id: todo.id })
        setIsLoading(false)
    }

    return (
        <TableCell className="flex justify-end items-center space-x-2">
            <EditTodoDialog todo={todo}/>
            <Button variant={"destructive"} size={"icon"} onClick={handleDelete}>
                {isLoading ? <Spinner /> : <Trash />}
            </Button>
        </TableCell>
    )
}
