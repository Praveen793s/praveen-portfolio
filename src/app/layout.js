import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Praveen | Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
