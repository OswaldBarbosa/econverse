import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/styles/globals.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Econverse | Vitrine de produtos",
  description:
    "Vitrine de produtos com modal de detalhes, desenvolvida com Next.js, TypeScript e SCSS Modules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}