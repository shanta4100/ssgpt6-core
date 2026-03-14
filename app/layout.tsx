import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SSGPT6 Core",
  description: "SSGPT6 Core - Intelligent Digital Access Platform",
  metadataBase: new URL("https://www.ssgpt6.com"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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