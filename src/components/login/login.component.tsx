// LoginComponent.tsx
import React, { useState } from "react"
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialog,
} from "../ui/alert-dialog"
import { Label } from "@radix-ui/react-label"
import { Button, buttonVariants } from "../ui/button"
import { Input } from "../ui/input"
import { useAppDispatch, useAppSelector } from "~/app/hooks"
import { useForm, Controller } from "react-hook-form"
import { close } from "~/app/store/features/ui/login-dialog.slice"
import { loginFormSchema } from "./schema/login.schema"
import type { LoginForm, LoginSubmitHandler } from "./schema/login.schema"
import { useAuthAPIMutation } from "~/app/store/api"
import { cn } from "~/lib/utils"
import Icons from "../shared/icons"
import { storeToken } from "~/app/store/features/auth/auth.slice"

const LoginComponent: React.FC = () => {
  const isLoginOpen = useAppSelector((state) => state.loginDialog.value)
  const [login, { isLoading }] = useAuthAPIMutation()
  const [loginRes, setLoginRes] = useState<any>()
  console.log("loginRes: ", loginRes)
  const dispatch = useAppDispatch()
  const closeLoginModal = () => {
    dispatch(close())
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>()

  const onSubmit: LoginSubmitHandler = async (data) => {
    try {
      setLoginRes(null)
      const res: any = await login(data)
      setLoginRes(res)
      if (res?.data?.token) {
        dispatch(storeToken(res?.data?.token))
        closeLoginModal()
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error("Login failed:", error)
    }
  }

  return (
    <AlertDialog open={isLoginOpen}>
      <AlertDialogContent className="w-full">
        <div className="absolute right-2 top-2">
          <AlertDialogCancel
            onClick={closeLoginModal}
            className={buttonVariants({ variant: "link", size: "icon" }) + "absolute right-0"}>
            x
          </AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <p className="pb-2 text-center text-3xl font-semibold tracking-tight transition-colors">Welcome Back 👋</p>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2.5">
            <div>
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input {...field} id="email" placeholder="name@example.com" type="email" />
                    <p className="mt-2 text-xs text-destructive">{errors?.email?.message}</p>
                  </>
                )}
                rules={loginFormSchema.email}
              />
            </div>
            <div>
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input {...field} id="password" placeholder="password" type="password" />
                    <p className="mt-2 text-xs text-destructive">{errors?.password?.message}</p>
                  </>
                )}
                rules={loginFormSchema.password}
              />
            </div>
          </div>
          {loginRes?.error?.data?.message && (
            <p className="text-s mt-2 text-destructive">{loginRes?.error?.data?.message}</p>
          )}
          <div className="my-4 mb-4 flex justify-center">
            <Button type="submit" className={cn(buttonVariants({ variant: "secondary" }))} disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Login
            </Button>
          </div>
        </form>
        {/* ... (rest of the component remains the same) */}
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LoginComponent
