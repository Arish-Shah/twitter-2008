import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twitter",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
