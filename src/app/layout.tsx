import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

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
  title: "NovaTech | Công nghệ mới",
  description:
    "Khám phá công nghệ mới với hiệu năng đột phá, màn hình sắc nét, pin bền và trải nghiệm sáng tạo vượt trội.",
  icons: {
    icon: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783089516/vk19qmqjgx8qvvns23jx.webp",
    shortcut: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783089516/vk19qmqjgx8qvvns23jx.webp",
    apple: "https://res.cloudinary.com/dh2jtjttt/image/upload/w_1000,q_auto,f_auto/v1783089516/vk19qmqjgx8qvvns23jx.webp",
  },
  openGraph: {
    title: "NovaTech | Công nghệ mới",
    description:
      "Khám phá công nghệ mới với hiệu năng đột phá, màn hình sắc nét, pin bền và trải nghiệm sáng tạo vượt trội.",
    url: "https://macbook-pro-m5-landing.vercel.app/",
    siteName: "NovaTech",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "NovaTech landing page preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaTech | Công nghệ mới",
    description:
      "Khám phá công nghệ mới với hiệu năng đột phá, màn hình sắc nét, pin bền và trải nghiệm sáng tạo vượt trội.",
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVariables = [geistSans.variable, geistMono.variable].sort().join(" ");

  return (
    <html lang="vi" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
