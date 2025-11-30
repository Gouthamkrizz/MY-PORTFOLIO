import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Goutham | AI & Data Engineer",
  description: "Portfolio of Goutham, an engineer specializing in Python, SQL, and AIML.",
};

import { WhatsAppButton } from "@/components/whatsapp-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground transition-colors duration-300`}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
