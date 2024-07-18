import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";

import ReduxProvider from "@/redux/provider/provider";

export const metadata: Metadata = {
    title: "FestFic Ranking",
    description: "A ranking of the best FestFic stories",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi">
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
            </body>
        </html>
    );
}
