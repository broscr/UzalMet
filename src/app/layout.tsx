import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Load the Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Metadata for the entire application
export const metadata: Metadata = {
  title: "UZALMET 2023 Sempozyumu",
  description:
    "Yıldırım Aktivitesi ve Şiddetli Yağışlar Arasındaki İlişkinin Analizi ",
};

/**
 * RootLayout component serves as the base layout for the entire application.
 * It sets the language, loads the Inter font with the Latin subset, and wraps
 * the content in the HTML and body tags.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      {/* Apply the Inter font style to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
