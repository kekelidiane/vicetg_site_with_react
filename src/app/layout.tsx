import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VICE TOGO | Vie Culture Environnement",
    template: "%s | VICE TOGO",
  },
  description:
    "L'Association VICE Togo soutient les enfants les plus démunis à travers l'éducation et promeut l'agriculture biologique et le reboisement.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
