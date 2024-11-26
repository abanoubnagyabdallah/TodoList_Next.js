import { getTodoAction } from "@/actions/todo.action";
import AddTodoDialog from "@/components/AddTodoDialog";
import { TodosTable } from "@/components/TodosTable";

export default async function Home() {
  const todos = await getTodoAction()
  return (
    <div className="flex flex-col w-[70%] mx-auto">
      <div className="self-end"><AddTodoDialog /></div>
      <TodosTable todos={todos} />
    </div>
  );
}
