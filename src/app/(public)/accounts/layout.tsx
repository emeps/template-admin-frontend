import type { Metadata } from "next";
import { setMetadata } from "@/constants/metadata";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const metadata: Metadata = setMetadata(
    "Conta",
    "Cadastra-se para cadastrar informações do seu estabelecimento."
)

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const googleClientId: string = process.env.GOOGLE_CLIENTE_ID || 'default-client-id';
    return (
      <html lang="en">
        <body>
          <GoogleOAuthProvider clientId={googleClientId}>
            {children}
          </GoogleOAuthProvider>
        </body>
      </html>
    );
  }