import "./globals.css";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import LangProvider from "@/components/LangProvider"; // 👈 default import


export const metadata: Metadata = {
  title: "Gagana Sahayi | KinKinetics",
  description: "Space & wellbeing, for everyone.",
  icons: {
    icon: "favicon.ico",
    shortcut: "favicon.ico",
    apple: "icons/icon-192.png",
  },
  manifest: "/gagana-sahayi/manifest.webmanifest" // optional: keep absolute to be safe
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
  <link rel="manifest" href="manifest.webmanifest" />
  <meta name="theme-color" content="#16a34a" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <link rel="apple-touch-icon" href="icons/icon-192.png" />
</head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
        <LangProvider>
          <Nav />
          <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
