"use client"

import { Inter } from "next/font/google"
import localFont from "next/font/local"
import Footer from "~/components/layout/footer"
import ThemeProvider from "~/components/shared/theme-provider"
import { Toaster } from "~/components/ui/toaster"

import { cn } from "~/lib/utils"
import "./globals.css"
import { AlertDialog } from "~/components/ui/alert-dialog"
import { Provider } from "react-redux"
import { store } from "./store/store"
import Header from "~/components/layout/header"
// import GetLocationPinCode from "~/components/get-pincode/get-pincode.dialog"
import LoginComponent from "~/components/login/login.component"
import { PageTransitionLoader } from "../utils/PageTransitionLoader"
import RouteGuard from "~/utils/routeGuard"

import "swiper/css"
import "swiper/css"
import "swiper/css/effect-fade"

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

export const viewport = {
  width: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={cn("font-sans antialiased", fontSans.variable, fontHeading.variable)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AlertDialog>
              {/* <GetLocationPinCode /> */}
              <LoginComponent />
              <PageTransitionLoader />
              <RouteGuard>
                <Header />
                <main>{children}</main>
                <Footer />
              </RouteGuard>
              <Toaster />
            </AlertDialog>
          </ThemeProvider>
        </body>
      </Provider>
    </html>
  )
}
