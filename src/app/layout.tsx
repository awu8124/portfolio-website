import "./globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "Alana Wu — Portfolio",
  description: "Software Engineering @ RIT • SWE + Cloud",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
