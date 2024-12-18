import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Minifooter from "@/components/minifooter";

export const metadata: Metadata = {
  title: "Rent a Car",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='font-primary bg-[#f6f7f9]'
      >
        <Header/>
        {children}
        <Footer/>
        <Minifooter/>
      </body>
    </html>
  );
}
