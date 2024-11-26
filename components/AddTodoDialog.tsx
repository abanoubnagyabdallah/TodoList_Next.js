"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { todoFormSchema, TodoFormValues } from "@/validation-schema";
import { createTodoAction } from "@/actions/todo.action";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import Spinner from "./Spinner";

export default function AddTodoDialog() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    const defaultValues: Partial<TodoFormValues> = {
        title: "",
        body: "",
        completed: false,
    }

    const form = useForm<TodoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
    })

    const onSubmit = async (data: TodoFormValues) => {
        setIsLoading(true)
        await createTodoAction({ title: data.title, body: data.body, completed: data.completed });
        setIsLoading(false)
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="mb-3">
                    <Plus size={14} /> New Todo
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="mb-3">
                    <DialogTitle>Add Todo</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                    {/*  */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter todo title....." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*  */}
                            <FormField
                                control={form.control}
                                name="body"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Short Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="todo Description"
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*  */}
                            <FormField
                                control={form.control}
                                name="completed"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center space-x-2">
                                            <FormControl>
                                                <Checkbox checked={field.value} onCheckedChange={field.onChange}  />
                                            </FormControl>
                                            <FormLabel>Completed</FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/*  */}
                            <DialogFooter>
                                <Button type="submit">{isLoading ? <><Spinner />Saving</> : "Save"}</Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
