import { Phone, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "~/components/ui/card"

const CardWithCarouselCard = ({ data }: any) => {
  return (
    <div>
      <Card className="mb-2 rounded-xl">
        {/* <Carousel
          className="relative w-full max-w-lg"
          opts={{
            loop: true,
            duration: 20,
          }}>
          <Link href={`/product/${data?._id}`}>
            <CarouselContent>
              {data?.image?.map((singleImage: any, index: number) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      alt="ecommerce"
                      className=" h-[150px] rounded-t-xl object-cover  lg:h-[250px]"
                      width={300}
                      height={300}
                      objectFit="cover"
                      src={singleImage?.thumbnailUrl}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Link>
        </Carousel> */}
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
