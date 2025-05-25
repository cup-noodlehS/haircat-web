import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "HairCat - Book Hair Service Appointments Anytime, Anywhere",
  description: "HairCat is the ultimate mobile app for booking hair service appointments with AI-powered hairstyle recommendations. Connect with expert stylists and discover your perfect look.",
  keywords: ["hair appointments", "hair styling", "AI hairstyle recommendations", "mobile booking", "hair salon", "beauty services", "hairstylist booking"],
  authors: [{ name: "HairCat Team" }],
  creator: "HairCat",
  publisher: "HairCat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://haircat.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HairCat - Book Hair Service Appointments Anytime, Anywhere",
    description: "HairCat is the ultimate mobile app for booking hair service appointments with AI-powered hairstyle recommendations. Connect with expert stylists and discover your perfect look.",
    url: "https://haircat.app",
    siteName: "HairCat",
    images: [
      {
        url: "/images/haircat-mascot-nobg.png",
        width: 300,
        height: 300,
        alt: "HairCat Mascot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HairCat - Book Hair Service Appointments Anytime, Anywhere",
    description: "HairCat is the ultimate mobile app for booking hair service appointments with AI-powered hairstyle recommendations.",
    images: ["/images/haircat-mascot-nobg.png"],
    creator: "@haircat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FEBF00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="HairCat" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
