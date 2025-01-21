import type { Metadata } from 'next';
import './globals.css';
import { setMetadata } from '@/constants/metadata';

export const metadata: Metadata = setMetadata(
  'Hello World',
  'Pagina de teste!'
);

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
