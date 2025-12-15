import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroller from "@/components/SmoothScroller";
import PageLoader from "@/components/PageLoader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Belal Ahmed Mohamed | Front-End Developer",
  description: "Experienced Front-End Developer specializing in scalable, responsive web applications using modern JavaScript frameworks. Expert in React.js, Next.js, and modern CSS frameworks.",
  keywords: "Frontend Developer, React.js, Next.js, TypeScript, JavaScript, Web Development, Alexandria Egypt",
  authors: [{ name: "Belal Ahmed Mohamed" }],
  creator: "Belal Ahmed Mohamed",
  publisher: "Belal Ahmed Mohamed",
  metadataBase: new URL("https://belal-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://belal-portfolio.vercel.app",
    siteName: "Belal Ahmed Mohamed Portfolio",
    title: "Belal Ahmed Mohamed | Front-End Developer",
    description: "Experienced Front-End Developer specializing in scalable, responsive web applications using modern JavaScript frameworks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Belal Ahmed Mohamed - Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belal Ahmed Mohamed | Front-End Developer",
    description: "Experienced Front-End Developer specializing in scalable, responsive web applications using modern JavaScript frameworks.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/images/profile.png",
    apple: "/images/profile.png",
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
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#050508] text-white overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen">
            {/* Enhanced Dynamic Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              {/* Primary gradient base */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0c0a1d] to-slate-950" />

              {/* Animated gradient orbs - Optimized for performance */}
              <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/6 rounded-full blur-[100px] animate-pulse-slow will-change-transform" />
              <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary-500/6 rounded-full blur-[80px] animate-pulse-slow will-change-transform" style={{ animationDelay: '2s' }} />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              <SmoothScroller />
              <PageLoader />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
