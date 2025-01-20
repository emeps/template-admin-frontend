import type { Metadata } from "next";
import "./globals.css";
import { setMetadata } from "@/constants/metadata";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const metadata: Metadata = setMetadata('Hello World', 'Pagina de teste!');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleOAuthProvider clientId={"608861738070-vepvj3anl8q9hkrp3d6em5hi9p8sk6te.apps.googleusercontent.com"}>
          {children}
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
