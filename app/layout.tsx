import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/shared/Navbar/Navbar";
import { QueryProvider } from "@/React-query/QueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { StoreProvider } from "@/store/StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <QueryProvider>
            <Navbar />
            {children}
            <Toaster />
          </QueryProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
