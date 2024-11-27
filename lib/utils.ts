import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const TodoSchema = z.object({
  userId: z.string().min(1, 'User ID is required'),
});

export type TodoValidationInput = z.infer<typeof TodoSchema>;