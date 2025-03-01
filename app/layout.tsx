import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import React, { ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = localFont({
  src:"./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

const spaceGrotesk = localFont({
  src:"./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
});



export const metadata: Metadata = {
  title: "DevFlow ",
  description: "DevFlow is an advanced Q&A platform built for developers to connect, collaborate, and solve technical challenges. Whether you're a beginner or an expert, DevFlow provides a seamless experience for sharing knowledge, discussing best practices, and finding solutions to complex coding problems. With a robust tagging system, real-time discussions, and a growing community of tech enthusiasts, DevFlow ensures you stay ahead in the ever-evolving world of development. Join a network of like-minded professionals, contribute to open discussions, and enhance your coding skills through meaningful interactions. Empower your development journey with DevFlow today.",
  icons: {
    icon:"/images/site-logo.svg",
  }
};

const RootLayout = async ({children}: {children:ReactNode}) => {

  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
     <SessionProvider session={session}>
     <body
        className={`${inter.variable} ${spaceGrotesk.variable}  antialiased`}
      >
      <ThemeProvider 
        attribute="class" 
        defaultTheme="system" 
        enableSystem 
        disableTransitionOnChange>

        {children}
      </ThemeProvider>
      <Toaster richColors/>
      </body>
     </SessionProvider>
     
    </html>
  );
}


export default RootLayout;
