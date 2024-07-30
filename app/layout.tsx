import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Header } from './components/header'
import RouteMap from './components/routeMap'

const openSans = Open_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Now Seguros',
  description: 'Seguros para você e sua família'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <RouteMap />
        <main className="flex bg-white min-h-screen flex-col items-center p-10 pt-0 gap-y-20">
          {children}
        </main>
      </body>
    </html>
  )
}
