import { Readex_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const redex = Readex_Pro({ subsets: ["arabic"] });

export const metadata = {
  title: "News",
  description: "News website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={redex.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
