import type { Metadata } from 'next'
import { Raleway, Bebas_Neue } from "next/font/google";
import './globals.css'

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});


export const metadata: Metadata = {
  title: 'Vitor Silva',
  description: 'Vitor Silva - A Full Stack Developer from Brazil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bebas.variable} ${raleway.variable} bg-slate-100 text-zinc-950 font-body relative`}>{children}</body>
    </html>
  )
}
