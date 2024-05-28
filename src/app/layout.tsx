import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { NavigationMenuDemo } from "../components/design/navbbar";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEXAS",
 
};

export default function RootLayout({

  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/mmainlogo.png" sizes="any" />
      </head>
      <body className={inter.className}>
      
          <header className=" py-1 z-10 custom-header-bg flex items-center justify-between bg-fixed fixed top-0 left-0 right-0">
        <div className="p-2 text-left">
            <p className=" text-lg text-white ml-4">
              <Link href='/'>
               <Image src="/images/logo1.png" alt="logo" width={120} height={50} />
              </Link>
            </p>
          </div>

          <div className='p-2 ml-auto'> 
            <NavigationMenuDemo />
          </div>

         
        </header>
        <main> {children}</main>

        <footer className="py-4 bg-black text-white text-center">
          <p>&copy; {new Date().getFullYear()} TEXAS. All rights reserved.</p>
        </footer>
       
       
        </body>
    </html>
  );
}
