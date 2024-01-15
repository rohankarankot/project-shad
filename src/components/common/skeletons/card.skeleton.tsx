import { MessageCircle, Phone } from "lucide-react"
import React from "react"
import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Skeleton } from "~/components/ui/skeleton"

const CardSkeleton = () => {
  return (
    <Card className="mb-2 h-[330px] rounded-xl pb-3">
      <Skeleton className="mb-2 h-[200px] " />
      <CardHeader>
        <Skeleton className="mb-2 h-4 w-[200px] rounded-full" />
      </CardHeader>
      <CardContent className="mb-4 flex gap-4">
        <div>
          <Skeleton className="mb-4 h-4 w-[250px] rounded-full" />
          <Skeleton className="h-4 w-[250px] rounded-full" />
        </div>
        <div className="flex  gap-2 sm:flex-row lg:flex-col">
          <Skeleton className="h-4 w-[20px] rounded-full" />
          <Skeleton className="h-4 w-[20px] rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardSkeleton
