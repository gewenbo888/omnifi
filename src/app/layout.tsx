import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://omnifi.psyverse.fun"),
  title: "OmniFi · The Periodic Table of Financialization | 万物金融 · 元素周期表",
  description:
    "Every fundamental dimension of reality — matter, information, energy, time, spacetime, biology, culture, image, identity — has a unit of account. Every unit of account becomes a market. The map.",
  keywords: [
    "OmniFi",
    "Payfi",
    "Infofi",
    "Enerfi",
    "Chronofi",
    "Spacetimefi",
    "Biofi",
    "Cultufi",
    "Visufi",
    "Iconofi",
    "DeFi",
    "RWA",
    "DePIN",
    "tokenization",
    "financialization",
    "万物金融",
    "金融化",
    "通证化",
    "记账单位",
    "DeSci",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: {
    canonical: "/",
    languages: { en: "/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "OmniFi · 万物金融" }],
    title: "OmniFi · The Periodic Table of Financialization",
    description:
      "Nine dimensions of reality, nine units of account, nine markets. The map of how everything becomes a market.",
    url: "https://omnifi.psyverse.fun/",
    siteName: "Psyverse · OmniFi",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "OmniFi · The Periodic Table of Financialization",
    description: "Nine dimensions. Nine units. Nine markets. The map.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#06060a" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,700;9..144,900&family=JetBrains+Mono:wght@300;400;500&family=Geist:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "OmniFi · The Periodic Table of Financialization",
              alternateName: "万物金融 · 元素周期表",
              description:
                "Every fundamental dimension of reality has a unit of account. Every unit of account becomes a market.",
              url: "https://omnifi.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Script
          src="https://analytics-dashboard-two-blue.vercel.app/tracker.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
