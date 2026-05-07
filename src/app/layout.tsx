import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRADIION Student Environment",
  description: "Structured student environment for capability development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
