import Link from "next/link"
import React from "react"

const HeaderLink = ({ link, className, onClick }: any) => {
  const isActiveLink = (href: string) => {
    return global.window?.location?.pathname === href
  }
  //   console.log(" ~~~> ", global.window?.location?.pathname, isActiveLink(link.link))

  return (
    <Link href={link.link} className={className} onClick={onClick}>
      {link?.title}
    </Link>
  )
}

export default HeaderLink
