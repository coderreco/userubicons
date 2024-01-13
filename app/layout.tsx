import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './ui/layout/navbar'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Use Rubicons',
  description: 'Sharp icons for Sharp UIs',
  metadataBase: new URL('https://userubicons.vercel.app/')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
