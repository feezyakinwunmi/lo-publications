import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MetaPixel from "./components/MetaPixel";
import { Suspense } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";


const inter = Inter({ subsets: ["latin"] });
const supabaseOrigin = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).origin
  : null;

export const metadata: Metadata = {
  metadataBase: new URL("https://lopublications.com"),
  title: "LO Publications - Premium Book Publishing",
  description: "Turn your manuscript into a published masterpiece with expert guidance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {supabaseOrigin && <link rel="preconnect" href={supabaseOrigin} crossOrigin="anonymous" />}
      </head>
      <body className={`${inter.className} bg-brand-white text-black antialiased`}>
        <Navbar />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}