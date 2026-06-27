import type { Metadata } from 'next'

import './globals.css'
import { Sidebar } from '@/src/widgets/home/ui/Sidebar'
import { inter } from '@/app/fonts'
import { baseMetadata } from '@/src/shared/config/seo'
import type { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.className} antialiased h-screen`}>
      <body className="lg:p-3 md:min-h-full flex bg-background">
        <div className="lg:p-4 m-auto relative max-w-300 w-full flex flex-col lg:h-151.25 md:flex-row md:border border-[#C7C4D7] rounded-lg">
          <Sidebar />
          {children}
        </div>
        <ToastContainer />
      </body>
    </html>
  )
}
