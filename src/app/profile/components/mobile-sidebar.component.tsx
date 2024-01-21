import { User } from "lucide-react"
import { useAppDispatch, useAppSelector } from "~/app/hooks"
import { toggleOpenProfileModal } from "~/app/store/features/ui/all-dialog.slice"
import { close } from "~/app/store/features/ui/login-dialog.slice"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"
import { SideTabs } from "./side-tabs.component"
import { useRouter } from "next/navigation"

const MobileSidebarComponent = () => {
  const isOpenSideBar = useAppSelector((state) => state?.allDialog?.openProfileModal)
  const dispatch = useAppDispatch()
  const router = useRouter()

  return (
    <Sheet
      open={isOpenSideBar}
      onOpenChange={() => {
        dispatch(close())
        dispatch(toggleOpenProfileModal())
      }}>
      <SheetTrigger className="md:hidden">
        <User />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex flex-col items-center space-y-10 py-10">
          <SideTabs className="sm:flex md:hidden" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebarComponent
