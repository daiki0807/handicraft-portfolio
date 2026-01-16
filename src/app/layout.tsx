import type { Metadata } from "next";
import { Noto_Sans_JP, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ママと子どものハンドメイド作品 | Handmade Crafts Portfolio",
  description: "心を込めて作った手芸作品をご紹介するポートフォリオサイトです。編み物、刺繍、ソーイングなど、温かみのある手作り作品をお届けします。",
  keywords: "手芸, ハンドメイド, 編み物, 刺繍, ソーイング, 手作り, クラフト",
  authors: [{ name: "手芸作家" }],
  openGraph: {
    title: "ママと子どものハンドメイド作品 | Handmade Crafts Portfolio",
    description: "心を込めて作った手芸作品をご紹介するポートフォリオサイトです。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${quicksand.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
