import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
