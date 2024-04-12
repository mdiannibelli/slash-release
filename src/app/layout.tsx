import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slash | New Release",
  description: "An original Slash website for his new album 2024",
  keywords: ['Slash', 'Album', 'Guitar', 'Guitar Hero']
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className='min-h-screen bg-black w-full'>
       {/*  <Navbar/> */}
        {children}
    </main>
      </body>
    </html>
  );
}
