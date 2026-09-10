import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://base64encoderdecoder.krishaiworks.com"
  ),

  title: "Base64 Encoder & Decoder | Encode & Decode Base64 Online",

  description:
    "Encode and decode Base64 text online quickly and easily with the free Base64 Encoder & Decoder by KrishAIWorks. Convert text to Base64 and decode Base64 strings instantly.",

  keywords: [
    "Base64 Encoder",
    "Base64 Decoder",
    "Base64 Encoder Decoder",
    "Base64 Encode Online",
    "Base64 Decode Online",
    "Encode Base64",
    "Decode Base64",
    "Base64 Converter",
    "Online Base64 Encoder",
    "Online Base64 Decoder",
    "Free Base64 Encoder",
    "Base64 Tool",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.vercel.app",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  alternates: {
    canonical:
      "https://base64encoderdecoder.krishaiworks.com/",
  },

  openGraph: {
    title: "Base64 Encoder & Decoder | KrishAIWorks",
    description:
      "Encode and decode Base64 text online quickly and easily with KrishAIWorks.",
    url: "https://base64encoderdecoder.krishaiworks.com/",
    siteName: "KrishAIWorks",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Base64 Encoder & Decoder | KrishAIWorks",
    description:
      "Encode text to Base64 and decode Base64 strings instantly online.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://krishaiworks.com/#organization",
      name: "KrishAIWorks",
      url: "https://krishaiworks.com",
      logo: {
        "@type": "ImageObject",
        url: "https://krishaiworks.com/logo.png",
        width: 512,
        height: 512,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://krishaiworks.com/#website",
      url: "https://krishaiworks.com",
      name: "KrishAIWorks",
      description:
        "AI-powered tools, productivity utilities, automation, chatbots, websites and custom digital solutions.",
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
      inLanguage: "en",
    },
    {
      "@type": "WebApplication",
      "@id":
        "https://base64encoderdecoder.krishaiworks.com/#webapplication",
      name: "Base64 Encoder & Decoder",
      url: "https://base64encoderdecoder.krishaiworks.com/",
      description:
        "Encode and decode Base64 text online quickly and easily with the free Base64 Encoder & Decoder by KrishAIWorks. Convert text to Base64 and decode Base64 strings instantly.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      publisher: {
        "@id": "https://krishaiworks.com/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id":
        "https://base64encoderdecoder.krishaiworks.com/#webpage",
      url: "https://base64encoderdecoder.krishaiworks.com/",
      name: "Base64 Encoder & Decoder | Encode & Decode Base64 Online",
      description:
        "Encode and decode Base64 text online quickly and easily with the free Base64 Encoder & Decoder by KrishAIWorks. Convert text to Base64 and decode Base64 strings instantly.",
      isPartOf: {
        "@id": "https://krishaiworks.com/#website",
      },
      about: {
        "@id":
          "https://base64encoderdecoder.krishaiworks.com/#webapplication",
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}