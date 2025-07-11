import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Enock Owusu Ansah - Computer Science Student & Software Engineer",
  description:
    "Portfolio of Enock Owusu Ansah, Computer Science student at Grambling State University specializing in software engineering, AI, and tech for social impact.",
  keywords:
    "Enock Owusu Ansah, Computer Science, Software Engineer, Grambling State University, Portfolio, Full Stack Developer",
  authors: [{ name: "Enock Owusu Ansah" }],
  openGraph: {
    title: "Enock Owusu Ansah - Computer Science Student & Software Engineer",
    description: "Portfolio showcasing projects in software engineering, AI, and tech for social impact.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
