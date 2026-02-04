import {
  Outfit,
  Ovo,
  Barlow_Condensed,
  Hanken_Grotesk,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} ${barlow.variable} ${hanken.variable}`}
    >
      <body className="font-hanken antialiased leading-8">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
