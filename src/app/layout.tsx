import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {GoogleAnalytics} from "@next/third-parties/google"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
      <body className={`${inter.className} bg-brand-white text-black antialiased`}>
        <Navbar />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Footer />
      </body>
    </html>
  );
}