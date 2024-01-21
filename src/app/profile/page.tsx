"use client"

import { MenuIcon } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { useAppDispatch } from "../hooks"
import { storeToken } from "../store/features/auth/auth.slice"
import { useRouter } from "next/navigation"
import { useGetProfileDetailsQuery } from "../store/features/auth/api"
import UseProfileTab from "./components/use-profile.tab"

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { data: profileData, error: profileError, isFetching } = useGetProfileDetailsQuery({})
  console.log("profileData: ", profileData)

  const handleLogOut = () => {
    dispatch(storeToken(null))
    global?.window?.sessionStorage.removeItem("token")
    router.replace("/")
    router.refresh()
  }
  return (
    <Tabs defaultValue="1">
      <Sheet open={isModalOpen} onOpenChange={setIsModalOpen}>
        <SheetContent side={"left"}>
          <div className="flex flex-col items-center space-y-10 py-10">
            <div className=" gap-x-2">
              <SideTabs className="sm:flex md:hidden" router={router} handleLogOut={handleLogOut} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="container h-[80vh]">
        <div className=" my-12 flex  gap-12">
          <SideTabs className="sm:hidden md:flex" router={router} handleLogOut={handleLogOut} />
          <TabsContent value="1">
            <UseProfileTab />
          </TabsContent>
          <TabsContent value="2">My Posts</TabsContent>
          <TabsContent value="3">settings</TabsContent>
        </div>
      </div>
    </Tabs>
  )
}

const SideTabs = ({ router, handleLogOut, className }: any) => {
  return (
    <TabsList className={` h-full flex-col gap-4 p-4 ${className}`}>
      <TabsTrigger value="1">Account</TabsTrigger>
      <TabsTrigger value="2">My Posts</TabsTrigger>
      <TabsTrigger value="3">settings</TabsTrigger>
      <TabsTrigger value="4" onClick={() => router.push("/")}>
        back to Home
      </TabsTrigger>
      <TabsTrigger value="5" onClick={handleLogOut}>
        Logout
      </TabsTrigger>
    </TabsList>
  )
}
