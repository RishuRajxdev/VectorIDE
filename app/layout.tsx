import type { Metadata } from "next";
import { Inter, Inconsolata } from "next/font/google";
import "./globals.css";
import { auth } from "@/auth";
import {SessionProvider} from "next-auth/react"
const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontInconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VectorIDE",
  description: "Web based",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontInconsolata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
      </body>
    </html>
  );
}