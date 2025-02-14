import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/nav'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentia World",
  description: "AI Agents Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
