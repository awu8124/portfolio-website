import Link from "next/link"

export default function Footer() {
  return (
    <nav className="w-full border-b py-4 bg-black">
      <div className="container mx-auto flex justify-between px-4">
        <Link href="/" className="font-bold text-lg">Alana Wu</Link>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <div className="flex flex-col gap-4 content-end">          
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-lg">Contact</h1>
          <p>aw4857@rit.edu</p>
          <p>Brooklyn, NY</p>
          {/* add linkedin and github here eventually*/}
        </div>
      </div>
      <div className="flex justify-center py-5 px-10">
        <p>© 2025 Alana Wu. All rights reserved.</p>
      </div>
    </nav>
  )
}
