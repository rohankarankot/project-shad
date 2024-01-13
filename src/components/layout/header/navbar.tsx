"use client"

import { MenuIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "~/app/hooks"
import MobileSidebarComponent from "~/app/profile/components/mobile-sidebar.component"
import { open } from "~/app/store/features/ui/login-dialog.slice"
import LoginComponent from "~/components/login/login.component"
import ThemeToggle from "~/components/shared/theme-toggle"
import { AlertDialogTrigger } from "~/components/ui/alert-dialog"
import { buttonVariants } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import headerData from "./header.data.json"
import HeaderLink from "./headerLink.component"
console.log("data: ", headerData?.data)

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()

  const isLoggedIn = useAppSelector((state) => state?.authentication?.token)

  const openLoginModal = () => {
    dispatch(open())
  }

  return (
    <nav className="bg-primary-foreground p-6">
      <div className=" container flex  items-center justify-between">
        <Link href="/" className="flex items-center text-2xl font-bold">
          <Image
            src="/chad-next.png"
            alt="ChadNext logo"
            width="30"
            height="30"
            className="mr-2 rounded-sm object-contain"
          />
          <p>Project Pro</p>
        </Link>
        <div className="2xl:gap-16 hidden items-center gap-12 md:flex">
          <div className="space-x-4 text-center text-sm leading-loose text-muted-foreground md:text-left">
            {headerData?.data?.map((link: any, id: number) => (
              <HeaderLink key={id} link={link} className={"font-semibold  hover:underline hover:underline-offset-4"} />
            ))}
          </div>
          <div className="flex items-center gap-x-2">
            {!!isLoggedIn ? (
              <Link href="/profile" className="font-semibold hover:underline hover:underline-offset-4">
                Profile
              </Link>
            ) : (
              <AlertDialogTrigger
                className={buttonVariants()}
                onClick={() => {
                  setIsModalOpen(false)
                  openLoginModal()
                }}>
                Login
              </AlertDialogTrigger>
            )}
          </div>
          <ThemeToggle />
        </div>
        <Sheet open={isModalOpen} onOpenChange={setIsModalOpen}>
          <SheetTrigger className="md:hidden">{!!isLoggedIn ? <MobileSidebarComponent /> : <MenuIcon />}</SheetTrigger>
          <SheetContent side={"top"}>
            <div className="absolute right-3 float-end pt-10">
              <ThemeToggle />
            </div>
            <div className="flex flex-col items-center space-y-10 py-10">
              <div className="space-y-4 text-center text-sm leading-loose text-muted-foreground">
                {headerData?.data?.map((link: any, id: number) => (
                  <HeaderLink
                    key={id}
                    link={link}
                    className={"block font-semibold hover:underline hover:underline-offset-4"}
                    onClick={() => setIsModalOpen(false)}
                  />
                ))}
              </div>
              <div className=" gap-x-2">
                {!!isLoggedIn ? (
                  <Link
                    href="/profile"
                    onClick={() => setIsModalOpen(false)}
                    className="font-semibold hover:underline hover:underline-offset-4">
                    Profile
                  </Link>
                ) : (
                  <AlertDialogTrigger
                    className={buttonVariants()}
                    onClick={() => {
                      setIsModalOpen(false)
                      openLoginModal()
                    }}>
                    Login
                  </AlertDialogTrigger>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <LoginComponent />
    </nav>
  )
}
