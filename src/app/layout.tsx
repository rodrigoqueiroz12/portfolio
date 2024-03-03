import './globals.css'

import type { Metadata } from 'next'

import { AppHeader } from '@/_components/_headers/app-header'

import { figtree, lora } from './fonts'

export const metadata: Metadata = {
  title: 'Rodrigo Queiroz | Desenvolvedor',
  description:
    'Conheça meu portfólio! Desenvolverei seu site/app com React, Laravel, HTML/CSS/JS. Soluções inovadoras e personalizadas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${lora.variable} antialiased`}
    >
      <body className="bg-bistre-50">
        <AppHeader />
        {children}
      </body>
    </html>
  )
}
