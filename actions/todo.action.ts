'use server'
import { ITodo } from "@/validation-schema"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

// get todos to display
export const getUserTodoAction = async ({ userId }: { userId: string }) => {
    return await prisma.todo.findMany({
        where: {
            user_id: userId as string
        },
        orderBy: {
            createdAt: "desc"
        }
    })
}

// create todo
export const createTodoAction = async ({ title, body, completed, user_id }: { title: string; body: string; completed: boolean; user_id: string }) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed,
            user_id
        }
    })
    revalidatePath('/')
}

// delete exists todo
export const deleteTodoAction = async ({ id }: { id: string }) => {
    await prisma.todo.delete({
        where: { id }
    })
    revalidatePath('/')
}

// update exists todo
export const updateTodoAction = async ({ id, title, body, completed }: ITodo) => {
    await prisma.todo.update({
        where: { id },
        data: {
            title,
            body,
            completed
        }
    })
    revalidatePath('/')
}

