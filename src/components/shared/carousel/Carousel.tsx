import Image from "next/image"
import * as React from "react"

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "~/components/ui/carousel"

export function CarouselComponent() {
  return (
    <Carousel
      className="relative w-full max-w-lg"
      opts={{
        loop: true,
        duration:10
      }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                alt="ecommerce"
                className="block overflow-hidden rounded-xl object-cover"
                width={520}
                height={320}
                src="https://dummyimage.com/500x500"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
