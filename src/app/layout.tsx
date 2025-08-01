import type { Metadata } from "next";
import { Geist, Kalam } from "next/font/google";
import "./globals.css";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Filip Świątek",
  description:
    "Oficjalna strona marki osobistej Filip Świątek. Tworzę nowoczesne i responsywne strony internetowe na zamówienie – od designu po wdrożenie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kalam.variable} antialiased`}>{children}</body>
    </html>
  );
}
