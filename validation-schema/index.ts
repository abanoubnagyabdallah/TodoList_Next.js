import { z } from "zod";

export const todoFormSchema = z.object({
  title: z.string()
    .min(2, { message: "title must be at least 2 characters.", })
    .max(30, { message: "title must not be longer than 30 characters.", }),

  body: z.string()
    .max(80, { message: "description must not be longer than 30 characters.", }).optional(),
  completed: z.boolean(),
})

export type TodoFormValues = z.infer<typeof todoFormSchema>


// todos interface
export interface ITodo {
  title: string;
  body: string | null;
  completed: boolean;
  id: string;
  createdAt?: Date;
}