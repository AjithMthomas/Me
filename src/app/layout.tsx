import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ajith M T — Full Stack Developer",
  description:
    "Portfolio of Ajith M T. Full Stack Developer with 4+ years of development experience across Angular, React.js, NextJS, Node.js, Python/Django, FastAPI, and Cloud Deployments (AWS, Docker, Kubernetes).",
  keywords: [
    "Ajith M T",
    "Full Stack Developer",
    "Software Engineer",
    "Angular",
    "Python",
    "Django",
    "FastAPI",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  authors: [{ name: "Ajith M T" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
