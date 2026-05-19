import { Providers } from "@/components/providers/Providers";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://salesghost.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0f1e" },
    { media: "(prefers-color-scheme: dark)", color: "#030308" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SalesGhost | AI Systems & Automation",
    template: "%s | SalesGhost",
  },
  description:
    "AI assistants, booking systems, websites and automation workflows for modern businesses.",
  applicationName: "SalesGhost",
  keywords: [
    "SalesGhost",
    "AI automation",
    "AI assistants",
    "booking system",
    "e-commerce AI",
    "SaaS MVP",
    "business automation",
    "digital product studio",
  ],
  authors: [{ name: "SalesGhost" }],
  creator: "SalesGhost",
  icons: {
    icon: [
      { url: "/images/logo.jpg", type: "image/jpeg" },
      { url: "/favicon.jpg", type: "image/jpeg", sizes: "32x32" },
    ],
    shortcut: "/favicon.jpg",
    apple: [
      { url: "/images/logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "SalesGhost",
    title: "SalesGhost | AI Systems & Automation",
    description:
      "AI assistants, booking systems, websites and automation workflows for modern businesses.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 512,
        height: 512,
        alt: "SalesGhost — AI Systems & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SalesGhost | AI Systems & Automation",
    description:
      "AI assistants, booking systems, websites and automation workflows for modern businesses.",
    images: ["/images/logo.jpg"],
  },
  appleWebApp: {
    capable: true,
    title: "SalesGhost",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
