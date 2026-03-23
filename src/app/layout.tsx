import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "100 Days of SwiftUI Tracker",
  description: "Track your progress through Paul Hudson's 100 Days of SwiftUI course",
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-surface-muted text-fg min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
