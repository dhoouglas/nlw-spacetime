import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google'
import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SingIn } from '@/components/SingIn'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        

        <main className="grid grid-cols-2 min-h-screen">

          {/* Left */}
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)]">

            {/* Blur */}
            <div className={`
            absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 
            opacity-50 rounded-full blur-full
          `} />

            {/* Stripes */}
            <div className="absolute right-2 top-0 bottom-0 w-2 bg-stripes" />

            {/* Sing-in */}
            {isAuthenticated ? <Profile /> : <SingIn />}

            {/* Hero */}
            <Hero />

            {/* Copyright */}
            <Copyright />
          </div>

          {/* Right */}
          <div className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-stars.svg)]">
            {children}
          </div>

        </main>
      </body>
    </html>
  )
}
