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
    authCheck(url)
  }, [pathname, searchParams])

  useLayoutEffect(() => {
    if (!authorized) {
      router.push(ROUTES.HOME as string)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorized])

  function authCheck(url: any) {
    // redirect to Homepage page if accessing a protected page and not logged in
    const protectedPaths = [ROUTES.MY_ACCOUNT]
    const path = url.split("?")[0]
    if (!protectedPaths.includes(path)) {
      setAuthorized(false)
    } else {
      setAuthorized(true)
    }
  }
  return <>{children}</>
}
export default RouteGuard
