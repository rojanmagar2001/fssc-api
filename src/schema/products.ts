import { z } from "zod";

export const createProductSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    price: z.number().min(0, { message: "Price must be a positive number" }),
  })
  .strict();
