import { Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CarouselComponent } from "~/components/shared/carousel/Carousel"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "~/components/ui/card"

const CardWithCarouselCard = ({ data }: any) => {
  return (
    <div>
      <Card className="mb-2 rounded-xl">
        <CarouselComponent images={data?.image} />
        <div className="flex justify-between px-4 sm:flex-col lg:flex-row">
          <div>
            <CardHeader>
              <CardTitle>{data?.caption}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{data?.description}</CardDescription>
              <CardDescription>{data?.address}</CardDescription>
            </CardContent>
          </div>
          <div className="flex  gap-4 p-2 sm:flex-row lg:flex-col">
            <div>
              <Phone size={20} />
            </div>
            <div>
              <MessageCircle size={20} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CardWithCarouselCard
