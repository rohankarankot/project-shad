import { MessageCircle, Phone } from "lucide-react"
import React from "react"
import { Card, CardContent, CardHeader } from "~/components/ui/card"
import { Skeleton } from "~/components/ui/skeleton"

const CardSkeleton = () => {
  return (
    <Card className="mb-2 rounded-xl h-[330px] pb-3">
      <Skeleton className="mb-2 h-[200px] " />
      <CardHeader>
        <Skeleton className="mb-2 h-4 w-[200px] rounded-full" />
      </CardHeader>
      <CardContent className="flex gap-4 mb-4">
        <div>
          <Skeleton className="mb-4 h-4 w-[250px] rounded-full" />
          <Skeleton className="h-4 w-[250px] rounded-full" />
        </div>
        <div className="flex  gap-2 sm:flex-row lg:flex-col">
          <Phone size={20} />
          <MessageCircle size={20} />
        </div>
      </CardContent>
    </Card>
  )
}

export default CardSkeleton
