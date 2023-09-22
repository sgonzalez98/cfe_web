import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../styles/tailwind.css";
import type { Metadata } from "next";
import SeoHead from "@/components/layout/SeoHead";

export const metadata: Metadata = {
  title: "CFE Guarne",
  description: "Centro de fe y esperanza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <SeoHead />
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
