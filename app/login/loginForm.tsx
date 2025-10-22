"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";
import styles from "./login.module.css";

export default function LoginForm() {
  return (
    <div className={styles.loginContainer}>
      <form action={login} className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            className={styles.input}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input
            name="password"
            type="password"
            className={styles.input}
            placeholder="••••••••"
            required
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Logging in..." : "Login"}
    </button>
  );
}
