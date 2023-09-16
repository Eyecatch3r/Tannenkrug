import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'; // Import the Head component
import React from "react";
import Bubbles from "./components/backgroundAnim/Particles";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tannenkrug',
  description: 'Gaststätte Tannenkrug,Gutbürgerliche Küche\n' +
      'Bundeskegelbahn',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <Head>
          <link rel="shortcut icon" href="./fav.ico" />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
        />
      </Head>
      <body className={inter.className}>

      {children}
      </body>
      </html>
  )
}
