import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alexayekha.tech'),
  title: {
    default: 'Alex Ascencio Ayekha | IT & IS Manager · Technology Executive',
    template: '%s | Alex Ascencio Ayekha',
  },
  description: 'IT & IS Manager, Technology Executive, and Systems Architect with 8+ years building and securing digital platforms across fintech, logistics, enterprise security, and distributed systems.',
  keywords: [
    'IT Manager', 
    'Information Security Manager', 
    'ISMS', 
    'technology executive', 
    'systems architect', 
    'enterprise security', 
    'blockchain', 
    'logistics', 
    'fintech', 
    'infrastructure'
  ],
  authors: [{ name: 'Alex Ascencio Ayekha', url: 'https://alexayekha.tech' }],
  creator: 'Alex Ascencio Ayekha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexayekha.tech',
    siteName: 'Alex Ascencio Ayekha',
    title: 'Alex Ascencio Ayekha | IT & IS Manager · Technology Executive',
    description: 'IT & IS Manager, Technology Executive, and Systems Architect with 8+ years building, securing, and scaling enterprise systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Ascencio Ayekha - Technology Executive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Ascencio Ayekha | IT & IS Manager · Technology Executive',
    description: 'IT & IS Manager, Technology Executive, and Systems Architect with 8+ years building, securing, and scaling enterprise systems.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Alex Ascencio Ayekha RSS" href="/rss.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
