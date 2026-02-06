import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";


const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <head></head>
      <body>
        <ThemeProvider>
          <main>
            <Navbar />
            {children}
            <ScrollToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
