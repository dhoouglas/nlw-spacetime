import { cookies } from 'next/headers';

import { Copyright } from '@/components/Copyright';
import { EmptyMemories } from '@/components/EmptyMemories';
import { Hero } from '@/components/Hero';
import { SingIn } from '@/components/SingIn';
import { Profile } from '@/components/Profile';


export default function Home() {
  const isAuthenticated = cookies().has('token')


  return (
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
        <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)]">
          <EmptyMemories />    
        </div>

      </main>
  )
}
