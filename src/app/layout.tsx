import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Tiny5,
  Silkscreen,
  Poppins,
  Shizuru,
  Dokdo,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
});

export const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

export const shizuru = Dokdo({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={shizuru.className}
        // className={`${tiny5.variable} antialiased font-tiny`}
      >
        {children}
      </body>
    </html>
  );
}
