import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "@/provider/NextAuthProvider";



export const metadata: Metadata = {
  title: "MN-Trusted",
  description: "Real Estate VA Services || Virtual Assistance Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"z-30"}
      >
      <NextAuthProvider>
       {children} 
       </NextAuthProvider>
      </body>
    </html>
  );
}
