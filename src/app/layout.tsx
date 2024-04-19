import type { Metadata } from "next";
import "./globals.css";
import { BackgroundImage } from "@/components";

export const metadata: Metadata = {
  title: "Star Wars - Search Planets",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <BackgroundImage>{children}</BackgroundImage>
    </html>
  );
}
