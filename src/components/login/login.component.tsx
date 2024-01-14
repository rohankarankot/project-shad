import React, { useState } from "react"
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialog,
} from "../ui/alert-dialog"
import { Button, buttonVariants } from "../ui/button"
import { useAppDispatch, useAppSelector } from "~/app/hooks"
import { useForm } from "react-hook-form"
import { close } from "~/app/store/features/ui/login-dialog.slice"
import { useAuthAPIMutation } from "~/app/store/features/auth/api"
import { storeToken } from "~/app/store/features/auth/auth.slice"
import Icons from "../shared/icons"
import { cn } from "~/lib/utils"
import type { LoginForm, LoginSubmitHandler } from "./schema/login.schema"
import InputField from "./input-field"

const LoginComponent: React.FC = () => {
  const isLoginOpen = useAppSelector((state) => state.loginDialog.value)
  const [login, { isLoading }] = useAuthAPIMutation()
  const [loginRes, setLoginRes] = useState<any>()
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
            <InputField label="Email" id="email" type="email" field="email" errors={errors} control={control} />
            <InputField
              label="Password"
              id="password"
              type="password"
              field="password"
              errors={errors}
              control={control}
            />
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
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LoginComponent
