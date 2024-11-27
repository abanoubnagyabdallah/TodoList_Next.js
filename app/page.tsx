import { getUserTodoAction } from "@/actions/todo.action";
import AddTodoDialog from "@/components/AddTodoDialog";
import { TodosTable } from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth()

  const todos = await getUserTodoAction({ userId: userId as string })
  return (
    <div className="flex flex-col w-[70%] mx-auto">
      <div className="self-end"><AddTodoDialog userId={userId || ""} /></div>
      <TodosTable todos={todos} />
    </div>
  );
}
