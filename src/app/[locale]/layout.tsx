import type { Metadata } from 'next'
import { Raleway, Bebas_Neue } from "next/font/google";
import '../globals.css'

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
});


export const metadata: Metadata = {
  title: 'Vitor Silva',
  description: 'Vitor Silva - I am a Full stack developer. Currently working with javascript, using mostly React.js and Node.js',
}

export default function RootLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${bebas.variable} ${raleway.variable} bg-slate-100 text-zinc-950 font-body relative overflow-x-hidden`}>{children}</body>
    </html>
  )
}
