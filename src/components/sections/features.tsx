/* eslint-disable @next/next/no-img-element */
import { MessageCircle, Phone } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card"
import Image from "next/image"
import Link from "next/link"
import { Flame } from "lucide-react"

export default function FeaturesPosts() {
  return (
    <>
      <section className="body-font bg-gray-900 py-4 pb-10 text-gray-400">
        <div className="container mx-auto">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 py-10 text-center">
            <span className="flex items-center gap-3 border-b-2">
              <Flame size={40} />
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-6xl">Trending in the City</h2>
              <Flame size={40} />
            </span>
          </div>
          <div className="flex">
            <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data, index) => (
                <Card key={index} className="mb-2 rounded-xl">
                  <Link href={`/product/${index + 1}`}>
                    <Image
                      alt="ecommerce"
                      className="block overflow-hidden rounded-t-xl object-cover"
                      width={320}
                      height={320}
                      src="https://dummyimage.com/320x280"
                    />
                  </Link>
                  <div className="flex justify-between px-4 sm:flex-col lg:flex-row">
                    <div>
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>Card Description</CardDescription>
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
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
