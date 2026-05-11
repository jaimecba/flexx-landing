import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloatingButton from '@/app/site/components/WhatsAppFloatingButton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flexx Tecnologia",
  description: "Flexx Tecnologia - Soluções Inovadoras",
  icons: {
    icon: "/logo_flexx.jpg",
    apple: "/logo_flexx.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* <WhatsAppFloatingButton /> */}
      </body>
    </html>
  );
}