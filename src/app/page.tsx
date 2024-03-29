"use client"

import Hero from "~/components/sections/hero"
import OpenSource from "~/components/sections/open-source"
import { useAppDispatch } from "./hooks"
import { useEffect } from "react"
import { toggleOpenPinCodeModal } from "./store/features/ui/all-dialog.slice"
import FeaturesPosts from "~/components/sections/components/featured-city-section/features"

export default function Home() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(toggleOpenPinCodeModal())
    }, 2000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [dispatch])
  return (
    <>
      <Hero />
      <FeaturesPosts />
      <OpenSource />
    </>
  )
}
