import React from "react"
import { Skeleton } from "~/components/ui/skeleton"

const PdpCardSkeleton = () => {
  return (
    <div className=" container flex gap-12 py-24">
      <Skeleton className="  mb-2 h-[500px] w-1/2 " />
      <div className="flex h-full flex-col items-center gap-4">
        <Skeleton className="h-4 w-[400px] rounded-full" />
        <Skeleton className="h-4 w-[400px] rounded-full" />
        <Skeleton className="h-4 w-[400px] rounded-full" />
        <div className="flex h-full  items-center gap-4">
          <Skeleton className="h-4 w-[100px] rounded-full" />
          <Skeleton className="h-4 w-[100px] rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default PdpCardSkeleton
