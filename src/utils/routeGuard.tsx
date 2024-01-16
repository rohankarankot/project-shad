"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState, useEffect, useLayoutEffect } from "react"
import { ROUTES } from "./routes"

function RouteGuard({ children }: any) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const url = pathname + searchParams.toString()
    console.log("url: ", url)
    authCheck(url)
  }, [pathname, searchParams])

  useLayoutEffect(() => {
    if (!authorized) {
      router.push(ROUTES.HOME as string)
    }
  }, [authorized])

  function authCheck(url: any) {
    // redirect to Homepage page if accessing a protected page and not logged in
    const protectedPaths = [ROUTES.MY_ACCOUNT]
    const path = url.split("?")[0]
    console.log("protectedPaths: ", protectedPaths.includes(path))
    if (!protectedPaths.includes(path)) {
      setAuthorized(false)
    } else {
      setAuthorized(true)
    }
  }
  return <>{children}</>
}
export default RouteGuard
