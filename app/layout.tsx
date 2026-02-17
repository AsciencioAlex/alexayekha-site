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
    default: 'Alex Ascencio Ayekha | Technology Executive & CTO',
    template: '%s | Alex Ascencio Ayekha',
  },
  description: 'Technology Executive and CTO with 8+ years building and scaling digital platforms across logistics, fintech, and enterprise systems. Writing on architecture, security, and systems thinking.',
  keywords: ['CTO', 'technology executive', 'systems architect', 'blockchain', 'logistics', 'fintech', 'AI', 'architecture', 'engineering', 'security', 'infrastructure'],
  authors: [{ name: 'Alex Ascencio Ayekha', url: 'https://alexayekha.tech' }],
  creator: 'Alex Ascencio Ayekha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexayekha.tech',
    siteName: 'Alex Ascencio Ayekha',
    title: 'Alex Ascencio Ayekha | Technology Executive & CTO',
    description: 'Technology Executive and CTO with 8+ years building and scaling digital platforms across logistics, fintech, and enterprise systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Ascencio Ayekha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Ascencio Ayekha | Technology Executive & CTO',
    description: 'Technology Executive and CTO with 8+ years building and scaling digital platforms across logistics, fintech, and enterprise systems.',
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
