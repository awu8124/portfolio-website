import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full border-b py-4 bg-black">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="font-bold text-lg">Alana Wu</Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
