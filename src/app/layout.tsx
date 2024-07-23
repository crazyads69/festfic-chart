import type { Metadata } from "next";

import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

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
                <ReduxProvider>
                    <div className="flex min-h-screen w-full flex-col items-center justify-start bg-white">
                        {children}
                    </div>
                    <footer className="flex w-full items-center justify-center bg-gray-100 py-4">
                        <p className="text-gray-600">
                            Made by ❤️ from
                            <Link
                                legacyBehavior
                                passHref
                                href="https://www.wattpad.com/user/crazyads69"
                            >
                                <a
                                    className="pl-1 text-blue-500 hover:text-blue-700 hover:underline"
                                    target="_blank"
                                >
                                    crazyads69
                                </a>
                            </Link>
                        </p>
                    </footer>
                </ReduxProvider>
            </body>
        </html>
    );
}
