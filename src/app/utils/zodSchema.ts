import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name cannot be less than 3 characters")
    .regex(/^[a-zA-Z ]+$/, "Name should contain only alphabets and spaces")
    .transform((val) => val.replace(/\s+/g, " ")), // collapse multiple spaces
  email: z
    .email("Invalid email address")
    .trim()
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message cannot be empty"),
});
