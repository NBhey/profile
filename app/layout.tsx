import type { Metadata } from 'next'

import './globals.css'

import { inter } from '@/app/fonts'
import { baseMetadata } from '@/src/shared/config/seo'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UniqueVisitorTracking from '@/app/(analytics)/UniqueVisitorTracking'
import { Navbar } from '@/src/shared/ui/Navbar/Navbar'

export const metadata: Metadata = baseMetadata

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.className} antialiased dvh`}
    >
      <body className="pb-30">
        {children}
        <Navbar />
        <ToastContainer />
      </body>

      <UniqueVisitorTracking />
    </html>
  )
}
