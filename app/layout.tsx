import type React from "react"
import type { Metadata } from "next"
import { Baloo_Bhaijaan_2, Noto_Naskh_Arabic, Noto_Sans_Arabic, Vazirmatn } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/components/auth-provider"

const baloo = Baloo_Bhaijaan_2({ subsets: ["arabic"], variable: "--font-baloo" })
const notoNaskh = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-noto-naskh" })
const notoSans = Noto_Sans_Arabic({ subsets: ["arabic"], variable: "--font-noto-sans" })
const vazirmatn = Vazirmatn({ subsets: ["arabic"], variable: "--font-vazirmatn" })

export const metadata: Metadata = {
  title: "الرئيسية - أرشيف الثقة التجارية",
  description: "منصة عملية تساعدك في تخزين بيانات المنتجات و الموردين",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Icon Font Stylesheet - Keeping Font Awesome for compatibility */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* CSS Stylesheets */}
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/dashboard.css" />
      </head>
      <body
        className={`theme1 ${baloo.variable} ${notoNaskh.variable} ${notoSans.variable} ${vazirmatn.variable} font-sans`}
      >
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
