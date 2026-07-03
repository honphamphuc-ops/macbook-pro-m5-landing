import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const ogImageUrl =
  "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783044706/rmiynpbe9loanuluilfc.webp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MacBook Pro M5 | Hiệu năng đột phá",
  description:
    "Khám phá MacBook Pro M5 với chip Apple M5, màn hình Liquid Retina XDR, pin dài lâu và trải nghiệm sáng tạo vượt trội.",
  openGraph: {
    title: "MacBook Pro M5 | Hiệu năng đột phá",
    description:
      "Khám phá MacBook Pro M5 với chip Apple M5, màn hình Liquid Retina XDR, pin dài lâu và trải nghiệm sáng tạo vượt trội.",
    url: "https://example.com",
    siteName: "MacBook Pro M5 Landing",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "MacBook Pro M5 landing page preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacBook Pro M5 | Hiệu năng đột phá",
    description:
      "Khám phá MacBook Pro M5 với chip Apple M5, màn hình Liquid Retina XDR, pin dài lâu và trải nghiệm sáng tạo vượt trội.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
