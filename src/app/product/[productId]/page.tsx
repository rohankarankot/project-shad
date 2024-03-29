"use client"

import { Phone } from "lucide-react"
import { useEffect } from "react"
import { useLazyGetProductDetailsQuery } from "~/app/store/features/products/api"
import { buttonVariants } from "~/components/ui/button"
import PdpCardSkeleton from "../skeleton/pdp.card.skeleton"

const Product = ({ params }: { params: { productId: string } }) => {
  const [getProductDetails, results] = useLazyGetProductDetailsQuery()

  useEffect(() => {
    getProductDetails(params.productId)
  }, [params.productId])

  if (!results?.isSuccess) {
    return <PdpCardSkeleton />
  }
  return (
    <section className="body-font overflow-hidden  ">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap gap-8 ">
          <div className="mx-auto sm:w-4/5 md:w-[45%]"></div>
          <div className="mt-6 w-full md:w-[45%] lg:mt-0 lg:py-6 lg:pl-10">
            <h2 className="title-font text-sm tracking-widest ">{results?.data?.category}</h2>
            <h1 className="title-font mb-1 text-3xl font-medium ">{results?.data?.caption}</h1>
            <p className="leading-relaxed">{results?.data?.description}</p>
            <hr />
            Address: <b>{`${results?.data?.address}, ${results?.data?.city}, ${results?.data?.state}`}</b>
            <div className="mb-5 mt-2 flex items-center border-b-2 border-gray-800 pb-5">
              <hr />
            </div>
            <div className="flex items-center justify-evenly ">
              <p className="font-semibold">
                Posted by: <b>{results?.data?.userName}</b>
              </p>

              <div className={buttonVariants({ variant: "secondary", className: "cursor-pointer" })}>
                <Phone size={20} className="mr-2" />
                call now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
