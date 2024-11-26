import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { ITodo } from "@/validation-schema"
import { Badge } from "./ui/badge"
import ActionButtons from "./ActionButtons"

export function TodosTable({ todos }: { todos: ITodo[] }) {

    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Completed</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.map((todo) => (
                    <TableRow key={todo.id}>
                        <TableCell className="font-medium">{todo.id}</TableCell>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell>{todo.completed ? <Badge>Completed</Badge> : <Badge variant={"secondary"}>Uncompleted</Badge>}</TableCell>
                        <ActionButtons todo={todo} />
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{todos.length}</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
