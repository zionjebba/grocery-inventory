"use server";

import { z } from "zod";
import { createSession, deleteSession} from "../lib/session";
import { redirect } from "next/navigation";

// Temporary test user (replace with DB lookup later)
const testUser = {
  id: "1",
  email: "myemail@me.com",
  password: "password",
};

// Define Zod schema
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .trim(),
});

export async function login(prevState: any, formData: FormData) {

 if (!formData) {
    console.error("FormData is undefined");
    return { error: "Invalid form submission" };
  }
    // Parse form data
  const result = loginSchema.safeParse(Object.fromEntries(formData));
  // If validation fails
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { email, password } = result.data;

  // Verify credentials (replace this with real database check)
  if (email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      },
    };
  }

  // If valid: create session and redirect
  await createSession(testUser.id);
  redirect("/dashboard");
}

export async function logout() {
 await deleteSession()
 redirect('/login')
}
