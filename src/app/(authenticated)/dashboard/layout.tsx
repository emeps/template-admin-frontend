import type { Metadata } from "next";
import { setMetadata } from "@/constants/metadata";

export const metadata: Metadata = setMetadata(
    "Dashboard",
    "Acompanhe as informações do seu estabelecimento."
)

export default function RootLayout(
    { children, }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
