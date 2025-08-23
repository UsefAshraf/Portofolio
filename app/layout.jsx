import { Inter } from "next/font/google"
import "./globals.css"
import { icons } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Youssef Ashraf",
  description: "My personal portfolio showcasing projects and skills",
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