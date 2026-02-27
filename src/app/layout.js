import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import ScrollToTop from "@/components/ScrollToTop";


const montserrat = Montserrat({ subsets: ["latin"] });

// ✅ Full SEO Setup
export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Praveen Phulwar | Full Stack Developer",
    template: "%s | Praveen Phulwar",
  },

  description:
    "Praveen Phulwar is a Full Stack Developer skilled in React, Next.js, Node.js, and Python. View my portfolio, projects, and contact information.",

  keywords: [
    "Praveen Phulwar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio Website",
    "Web Developer India",
  ],

  authors: [{ name: "Praveen Phulwar", url: "https://yourdomain.com" }],

  creator: "Praveen Phulwar",

  applicationName: "Praveen Portfolio",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Praveen Phulwar | Full Stack Developer",
    description: "Visit my portfolio to view projects and skills.",
    url: "https://yourdomain.com",
    siteName: "Praveen Portfolio",

    images: [
      {
        url: "/logo.png", // ✅ logo for SEO preview
        width: 512,
        height: 512,
        alt: "Praveen Phulwar Logo",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Praveen Phulwar Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
