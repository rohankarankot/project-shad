import Navbar from "./navbar"

export default function Header() {
  return (
    <header className="h-20 w-full">
      <div className=" sticky top-0 z-50 h-full shadow-md">
        <Navbar />
      </div>
    </header>
  )
}
