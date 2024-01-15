"use client"

import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Sheet open={isModalOpen} onOpenChange={setIsModalOpen}>
        <SheetContent side={"left"}>
          <div className="flex flex-col items-center space-y-10 py-10">
            <div className="space-y-4 text-center text-sm leading-loose text-muted-foreground"></div>
            <div className=" gap-x-2"></div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="container h-[80vh]">
        <Tabs defaultValue="1" className=" my-12 flex  gap-12">
          <TabsList className=" h-full flex-col gap-4 p-4">
            <TabsTrigger value="1">Account</TabsTrigger>
            <TabsTrigger value="2">My Posts</TabsTrigger>
            <TabsTrigger value="3">settings</TabsTrigger>
            <TabsTrigger value="4">Logout</TabsTrigger>
          </TabsList>
          <TabsContent value="1">Account</TabsContent>
          <TabsContent value="2">My Posts</TabsContent>
          <TabsContent value="3">settings</TabsContent>
          <TabsContent value="4">Logout</TabsContent>
        </Tabs>
      </div>
    </>
  )
}
