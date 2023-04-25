import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loading from './loading'

import { Suspense } from 'react'

export const metadata = {
  title: 'Static Blog',
  description: 'Static Blog',
  icons: {
    icon: { url: '/favicon.ico', type: 'image/x-icon' },
    shortcut: { url: '/favicon.ico', type: 'image/x-icon' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-2xl px-6">
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
