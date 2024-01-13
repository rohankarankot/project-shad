"use client"

import { CarouselComponent } from "~/components/shared/carousel/Carousel"
import { Button, buttonVariants } from "~/components/ui/button"

export default function product() {
  return (
    <section className="body-font overflow-hidden bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap gap-8 ">
          <div className="mx-auto sm:w-4/5 lg:w-[40%]">
            <CarouselComponent />
          </div>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="title-font text-sm tracking-widest text-gray-500">BRAND NAME</h2>
            <h1 className="title-font mb-1 text-3xl font-medium text-white">The Catcher in the Rye</h1>

            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
              XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric.
              Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-800 pb-5">
              <hr />
            </div>
            <div className="flex justify-between">
              <span className="title-font text-2xl font-medium text-white">$58.00</span>

              <Button className={buttonVariants({ size: "lg" })}>Dive In Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
