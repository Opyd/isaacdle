import { Inter } from 'next/font/google'
import './globals.css'
import {Providers} from "@/app/providers";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Isaacdle',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
    <head>
      <meta name="google-site-verification" content="mqZ8snknrWo8M6eqI6K-EgoJl-YwUefTCShIIRO6nSc"/>
      <meta name="description"
            content="Isaacdle is a fun and challenging word-guessing game inspired by The Binding of Isaac. Guess the correct item to win!"/>
      <meta name="keywords"
            content="Wordle, Tboi, The Binding of Isaac, guess, word-guessing game, Isaac items, puzzle game"/>
      <meta property="og:title" content="Isaacdle - TBOI Wordle"/>
      <meta property="og:description"
            content="Isaacdle is a fun and challenging word-guessing game inspired by The Binding of Isaac. Guess the correct item to win!"/>
      <meta property="og:url" content="https://isaacdle.vercel.app/"/>
      <title>Isaacdle - TBOI Wordle</title>
    </head>
    <body>
    <Providers>
      {children}
      <Analytics />
    </Providers>
    </body>
    </html>
  )
}
