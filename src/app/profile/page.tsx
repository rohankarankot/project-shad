"use client"

import { Tabs, TabsContent } from "~/components/ui/tabs"
import { useAppSelector } from "../hooks"
import { useRouter, useSearchParams } from "next/navigation"
import { useGetProfileDetailsQuery } from "../store/features/auth/api"
import UseProfileTab from "./components/use-profile.tab"
import { SideTabs } from "./components/side-tabs.component"

export default function Profile() {
  const searchParams = useSearchParams()
  const activeTab = searchParams.get("tab")
  const isOpenSideBar = useAppSelector((state) => state?.allDialog?.openProfileModal)

  const { data: profileData, error: profileError, isFetching } = useGetProfileDetailsQuery({})

  return (
    <Tabs defaultValue={activeTab || "account"}>
      <div className="container h-[80vh]">
        <div className=" my-12 flex  gap-12">
          <SideTabs className="sm:hidden md:flex" />
          <TabsContent value="account">
            <UseProfileTab />
          </TabsContent>
          <TabsContent value="myposts">My Posts</TabsContent>
          <TabsContent value="settings">settings</TabsContent>
        </div>
      </div>
    </Tabs>
  )
}
