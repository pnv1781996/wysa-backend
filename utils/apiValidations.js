import { z } from "zod";

// creating a schema for strings
export const signupSchema = z.object({
  name: z
    .string()
    .refine(
      (
        value //.test(value),
      ) => "Name should contain only alphabets"
    )
    .refine(
      (value) => value.length >= 2,
      "Name should have at least 3 characters"
    )
    .refine(
      (value) => value.length <= 30,
      "Name should have at most 30 characters"
    ),
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
      .regex(/^[a-zA-Z0-9]+$/, { message: "Id ontains alphnumeric value" }),
    option: z.string().regex(/^[ A-Za-z0-9_:@./#&+-]*$/, {
      message: "Options ontains alphnumeric value",
    }),
  })
);

export const nextPageQParamSchema = z.object({
  currentpage: z
    .string()
    .refine((value) => "Param should contain only alphabets"),
});
