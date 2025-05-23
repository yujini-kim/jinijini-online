import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});
const nanumSquareNeo = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareNeo.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nanum",
  display: "swap",
});

export const metadata: Metadata = {
  title: "김유진 포트폴리오",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          calistoga.className,
          nanumSquareNeo.className,
          "bg-gray-900 text-white antialiased",
        )}
      >
        {children}
      </body>
    </html>
  );
}
