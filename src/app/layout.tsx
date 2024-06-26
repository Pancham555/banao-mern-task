import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
const space_grostesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ATG World",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/assets/logo-S2lIhR8K.svg"
        type="image/x-icon"
      />
      <body className={space_grostesk.className}>{children}</body>
    </html>
  );
}
