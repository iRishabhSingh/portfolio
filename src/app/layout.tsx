import type { Metadata } from "next";

import "./fonts.css";
import "./globals.css";
import { workSans } from "./fonts";

export const metadata: Metadata = {
  title: "ऋ's Portfolio",
  description:
    "Welcome to the digital manifestation of my creative and technical journey. This portfolio is a living, breathing project that grows as I do, showcasing my skills, projects, and the passion I bring to web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
