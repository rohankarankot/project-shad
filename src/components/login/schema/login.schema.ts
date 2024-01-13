import type { SubmitHandler } from "react-hook-form/dist/types"

export interface LoginForm {
  email: string
  password: string
}

export const loginFormSchema:any = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 3,
      message: "Password must be at least 3 characters",
    },
  },
}

export type LoginSubmitHandler = SubmitHandler<LoginForm>
