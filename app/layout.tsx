import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalStyle } from "@/styles/global";
import StyledJsxStyleRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BoozeBrawl",
  description: "A drinking game, but with a twist.",
  creator: "HangerThem",
  authors: [
    {
      name: "HangerThem",
      url: "https://hangerthem.github.io",
    },
  ],
  keywords: ["drinking", "game", "fun"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledJsxStyleRegistry>
          <GlobalStyle />
          <main>{children}</main>
        </StyledJsxStyleRegistry>
      </body>
    </html>
  );
}
