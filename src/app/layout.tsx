import "@/styles/globals.css";

import { type Metadata } from "next";
import { Wix_Madefor_Display } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import { NavBar } from "@/components/nav-bar";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "VolunteerMe",
  description:
    "An online platform designed to connect volunteers with local nonprofits.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${font.variable}`}>
        <body className="text-secondary-foreground">
          <NavBar />
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
