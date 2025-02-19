import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: [ "400","500","600", "700"],
});

export const metadata: Metadata = {
  title: "Auth library",
  description: "A next-auth library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(" antialiased" , poppins.className)}
        style={{
          backgroundColor : "#41ff4e",
          backgroundImage: "radial-gradient(ellipse at top, #41ff4e 0%, #0a6c15 100%)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
