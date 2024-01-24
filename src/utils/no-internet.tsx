import { useEffect, useState } from "react"

const Offline = () => {
  const [showComponent, setShowComponent] = useState(true)

  useEffect(() => {
    setShowComponent(true)
  }, [showComponent])

  return showComponent ? <>No internet connection</> : ""
}

const NoInternetConnection = (props: { children: any }) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true)

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator?.onLine)
  }, [])

  if (typeof window !== "undefined") {
    window?.addEventListener("online", () => {
      setOnline(true)
    })
    window?.addEventListener("offline", () => {
      setOnline(false)
    })
  }

  // if user is online, return the child component else return a custom component
  return isOnline ? props?.children : <Offline />
}

export default NoInternetConnection
