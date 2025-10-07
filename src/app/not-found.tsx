import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { Frown } from 'lucide-react'
import Link from 'next/link'
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className='text-neutral-100 justify-center items-center flex h-screen'>
        <section className='justify-center'>
          <Frown/ >
          <h1>404 - Page Not Found</h1>
          <p>This page does not exist.</p>
          <Link href="/"> Click to Return Home</Link>
        </section>
      </body>
    </html>
  )
}