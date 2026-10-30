import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yousef Ashraf | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer building production web apps and AI products with React, Next.js, Node.js, and .NET.",
  icons:{
    icon:"/prof.jpg"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>{children}</body>
    </html>
  )
}