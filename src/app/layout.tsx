import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Static Blog',
  description: 'Static Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-2xl px-6">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
