import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Providers } from "./redux/providers";
import { ChakraProviders } from "./components/chakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feisbook",
  description: "A clone of Facebook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ChakraProviders>{children}</ChakraProviders>
        </Providers>
      </body>
    </html>
  );
}
