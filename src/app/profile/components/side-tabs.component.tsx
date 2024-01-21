import { TabsTrigger } from "@radix-ui/react-tabs"
import { useRouter, useSearchParams } from "next/navigation"
import { useAppDispatch } from "~/app/hooks"
import { storeToken } from "~/app/store/features/auth/auth.slice"
import { Tabs, TabsList } from "~/components/ui/tabs"

export const SideTabs = ({ className }: any) => {
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const router = useRouter()

  const activeTab = searchParams.get("tab")

  const handleLogOut = () => {
    dispatch(storeToken(null))
    global?.window?.sessionStorage.removeItem("token")
    router.replace("/")
    router.refresh()
  }
  return (
    <Tabs defaultValue={activeTab || "account"}>
      <TabsList className={` h-full flex-col gap-4 p-4 ${className}`}>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="myposts">My Posts</TabsTrigger>
        <TabsTrigger value="settings">settings</TabsTrigger>
        <TabsTrigger value="4" onClick={() => router.push("/")}>
          back to Home
        </TabsTrigger>
        <TabsTrigger value="5" onClick={handleLogOut}>
          Logout
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
