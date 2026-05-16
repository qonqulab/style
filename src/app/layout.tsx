import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StyledJsxRegistry from "./registry";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'QONQU Style Library | Sovereign Design Systems',
  description: 'A high-fidelity collection of 20+ modern design styles for the QONQU Media Empire. Explore Glassmorphism, Neumorphism, Bauhaus, and more.',
  keywords: ['Design System', 'UI/UX', 'Glassmorphism', 'Web Design', 'QONQU', 'CSS Styles'],
  authors: [{ name: 'QONQU Lab' }],
  openGraph: {
    title: 'QONQU Style Library',
    description: 'Explore the sovereign design systems of the QONQU Media Empire.',
    url: 'https://style.qonqu.com',
    siteName: 'QONQU Style Library',
    images: [
      {
        url: 'https://style.qonqu.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QONQU Style Library Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QONQU Style Library',
    description: 'High-fidelity design styles for modern web applications.',
    images: ['https://style.qonqu.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}

