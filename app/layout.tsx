import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PERT Servicios Constructivos | Constructora en Jalisco y Nayarit',
  description: 'PERT Servicios Constructivos. Construimos proyectos exitosos con calidad, innovación y confianza desde 2020.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

