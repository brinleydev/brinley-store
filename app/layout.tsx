import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Montserrat } from 'next/font/google'
import classNames from 'classnames'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import StoreProvider from '@/store/provider'
import '@/app/globals.css'

const font = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brinley Developpment',
  description: 'Our works are louder than words',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={classNames(font.className, [
            'relative m-0 flex min-h-screen w-full flex-col gap-10 bg-fm-dark p-0 text-fm-light',
          ])}
        >
          <Navbar />
          <main
            className="relative h-fit grow bg-cover bg-center bg-no-repeat py-20"
            style={{ backgroundImage: "url('/images/bg-gta.jpg')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  )
}
