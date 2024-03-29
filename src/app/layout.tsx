import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import GlobalMenu from "@/components/GlobalMenu";
import { ThemeModeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={GeistSans.className}
      >
        <ThemeModeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <SessionProvider>
          <GlobalMenu />
          {children} 
          <Toaster />
        </SessionProvider>
        </ThemeModeProvider>
      </body>
    </html>
  );
}
