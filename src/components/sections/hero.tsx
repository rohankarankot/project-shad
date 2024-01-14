"use client"
import React from "react"
import { useAppDispatch, useAppSelector } from "~/app/hooks"
import { open } from "~/app/store/features/ui/login-dialog.slice"
import { Button, buttonVariants } from "~/components/ui/button"

export default function Hero() {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector((state) => state?.authentication?.token)


  return (
    <section>
      <div className="xl:py-24 container flex h-full min-h-[calc(50vh)] w-full flex-col items-center justify-center space-y-20 py-14 md:min-h-[calc(60vh)]">
        <div className="mx-auto w-full max-w-2xl ">
          <h1 className=" text-balance bg-gradient-to-br from-gray-900 via-gray-800 to-gray-400 bg-clip-text text-center font-heading text-[40px] font-bold leading-tight tracking-wider text-transparent drop-shadow-md duration-700 ease-linear animate-in zoom-in-75 md:text-7xl md:leading-[5rem] dark:bg-gradient-to-br dark:from-gray-100 dark:to-gray-900">
            This is a catchy headline for the project!!!
          </h1>

          <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
            {!!isLoggedIn ? (
              <div
                className={buttonVariants({ variant: "link", size: "lg" }) + "cursor-pointer"}
                onClick={() => dispatch(open())}>
                Explore our products
              </div>
            ) : (
              <Button className={buttonVariants({ variant: "secondary", size: "lg" })} onClick={() => dispatch(open())}>
                Dive In Now
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
