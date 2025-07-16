import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800"] });

export const metadata: Metadata = {
  title: "Ajit Sridhar - Portfolio",
  description: "Senior Product Manager | Tech Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={nunito.className + " text-gray-900 min-h-screen"}
        style={{
          backgroundImage: 'url(/images/whitebackground.jfif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {children}
      </body>
    </html>
  );
}
