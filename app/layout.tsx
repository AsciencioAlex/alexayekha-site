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
    default: 'Alex Ayekha | CTO & MSc IT Candidate',
    template: '%s | Alex Ayekha',
  },
  description: 'CTO & MSc IT Candidate focused on applied AI, blockchain infrastructure, cryptography, and production-grade systems. Writing on architecture, security, and real-world engineering.',
  keywords: ['CTO', 'blockchain', 'cryptography', 'AI', 'architecture', 'engineering', 'security', 'infrastructure'],
  authors: [{ name: 'Alex Ayekha', url: 'https://alexayekha.tech' }],
  creator: 'Alex Ayekha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexayekha.tech',
    siteName: 'Alex Ayekha',
    title: 'Alex Ayekha | CTO & MSc IT Candidate',
    description: 'CTO & MSc IT Candidate focused on applied AI, blockchain infrastructure, cryptography, and production-grade systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alex Ayekha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Ayekha | CTO & MSc IT Candidate',
    description: 'CTO & MSc IT Candidate focused on applied AI, blockchain infrastructure, cryptography, and production-grade systems.',
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
        <link rel="alternate" type="application/rss+xml" title="Alex Ayekha RSS" href="/rss.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
