import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "정인호 포트폴리오",
  description: "서비스 기획·운영 15년, AI·자동화 전문 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-[#0a0f1e] text-white antialiased">{children}</body>
    </html>
  );
}
