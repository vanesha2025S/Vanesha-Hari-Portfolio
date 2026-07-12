import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vanesha Hari | AI, Embedded Systems & Software",
  description:
    "Computer Engineering student at Virginia Tech building intelligent systems across AI, embedded software, and hardware.",
  keywords: [
    "Vanesha Hari",
    "Computer Engineering",
    "AI Engineering",
    "Embedded Systems",
    "Software Engineering",
    "Virginia Tech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}