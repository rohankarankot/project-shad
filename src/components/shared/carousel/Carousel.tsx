"use client"

import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"
export function CarouselComponent({ images }: any) {
  return (
    <>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images?.map((singleImage: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              alt="ecommerce"
              className=" h-[150px] rounded-t-xl object-cover  lg:h-[250px]"
              width={300}
              height={300}
              objectFit="cover"
              src={singleImage?.thumbnailUrl}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
