import type { Metadata } from "next";
import { Roboto, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavbarDemo/NavbarDemo";
import Footer from "@/components/Footer/Footer";

const robot_init = Roboto({ subsets: ["latin"], weight: ["100", "300", "700"], variable: '--font-roboto' });
const josefin_sans_init = Josefin_Sans({ subsets: ["latin"], weight: ["100", "300", "700"], variable: '--font-josefin-sans' });

export const metadata: Metadata = {
  title: "Growdio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //@ts-ignore
    <html lang="en">
      <body className={`${robot_init.variable} ${josefin_sans_init.variable}`}>
        <NavbarDemo />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
