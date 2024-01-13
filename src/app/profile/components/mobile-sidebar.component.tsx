import { MenuIcon } from "lucide-react"
import { useAppDispatch, useAppSelector } from "~/app/hooks"
import { toggleOpenProfileModal } from "~/app/store/features/ui/all-dialog.slice"
import { close } from "~/app/store/features/ui/login-dialog.slice"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"

const MobileSidebarComponent = () => {
  const isOpenSideBar = useAppSelector((state) => state?.allDialog?.openProfileModal)
  const dispatch = useAppDispatch()

  return (
    <Sheet
      open={isOpenSideBar}
      onOpenChange={() => {
        dispatch(close())
        dispatch(toggleOpenProfileModal())
      }}>
      <SheetTrigger className="md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex flex-col items-center space-y-10 py-10">
          <div className="space-y-4 text-center text-sm leading-loose text-muted-foreground"></div>
          <div className=" gap-x-2"></div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebarComponent
