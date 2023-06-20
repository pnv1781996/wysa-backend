import { z } from "zod";

// creating a schema for strings
export const signupSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should have at least 3 characters" })
    .max(30, { message: "Name should have at most 30 characters" })
    .regex(/^[ A-Za-z0-9_:@./#&+-]*$/, {
      message:
        "Name should have only some letters, numbers and special symbol like (_:@./#&+-)",
    }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, { message: "Password must contain at least one digit" })
    .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
      message: "Password must contain at least one special character",
    }),
});

export const assessmentSchema = z.array(
  z.object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/, { message: "Id contains alphnumeric value" }),
    option: z.string().regex(/^[ A-Za-z0-9_:@./#&+-]*$/, {
      message: "Options ontains alphnumeric value",
    }),
  })
);

export const nextPageQParamSchema = z.object({
  currentpage: z
    .string()
    .nullable()
    .optional()
    .refine(
      (value) => value === null || /^[A-Za-z]+$/.test(value),
      "Param should contains only alphabets"
    ),
});
