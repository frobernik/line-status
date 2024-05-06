import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "TFL Line Status",
  description: "TFL line status app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
