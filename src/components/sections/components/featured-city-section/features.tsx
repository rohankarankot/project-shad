"use client"

import { Flame } from "lucide-react"
import { useAppSelector } from "~/app/hooks"
import { useLazyGetAllPostFromCityQuery } from "~/app/store/features/featured-city-posts/api"
import { useEffect } from "react"
import { LocationDetails } from "~/types/common.types"
import CardSkeleton from "../../../common/skeletons/card.skeleton"
import CardWithCarouselCard from "~/components/common/plp-cards/card-with-carousel.card"
import { Button } from "~/components/ui/button"
import NotFoundComponent from "./not-found-component"
import useGeolocation from "~/hooks/use-geolocation"

export default function FeaturesPosts() {
  const [getAllPostFromCity, results] = useLazyGetAllPostFromCityQuery()
  const { askForLocationPermission } = useGeolocation()
  console.log("results: ~~~", results)

  const location: LocationDetails = useAppSelector((state) => state.geoLocation)

  type payloadType = { city: string; page: number; limit: number }
  useEffect(() => {
    const data: payloadType = {
      city: location?.address?.city?.toLowerCase(),
      page: 1,
      limit: 10,
    }
    const getFeaturedPosts = async (data: payloadType) => {
      try {
        const res: any = await getAllPostFromCity(data)
        if (res?.data?.token) {
        }
      } catch (error) {
        console.error(" failed:", error)
      }
    }

    getFeaturedPosts(data)
  }, [location.address.state_district])

  return (
    <>
      <section className="body-font py-4 pb-10 text-gray-400">
        <div className="container mx-auto">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 py-10 text-center">
            <span className="flex items-center gap-3 border-b-2">
              <Flame size={40} />
              <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-6xl">Trending in the City</h2>
              <Flame size={40} />
            </span>
          </div>
          {
            // @ts-ignore
            results?.error?.status === 400 ? (
              <NotFoundComponent
                data={{
                  title: "It seems that you have not Given Location Permission",
                  subtitle: "Please turn on the location and try again",
                  primaryAction: {
                    title: "Allow Location",
                    cB: askForLocationPermission,
                  },
                }}
              />
            ) : (
              <>
                <div className="flex">
                  <div className="grid grid-cols-2 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
                    {!results?.isSuccess && (
                      <>
                        {Array.from({ length: 4 }).map((_, index) => (
                          <CardSkeleton />
                        ))}
                      </>
                    )}
                    {results?.data?.data?.map((data: any, index: number) => (
                      <CardWithCarouselCard key={data?._id} data={data} />
                    ))}
                  </div>
                </div>
                {results?.data?.data && (
                  <Button className="m-auto mt-4 flex text-xl" variant={"link"}>
                    View All
                  </Button>
                )}
              </>
            )
          }
        </div>
      </section>
    </>
  )
}
