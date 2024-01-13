"use client"

import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Sheet open={isModalOpen} onOpenChange={setIsModalOpen}>
        <SheetTrigger className="md:hidden">
          <MenuIcon />
          sdf
        </SheetTrigger>
        <SheetContent side={"left"}>
          <div className="flex flex-col items-center space-y-10 py-10">
            <div className="space-y-4 text-center text-sm leading-loose text-muted-foreground"></div>
            <div className=" gap-x-2"></div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
