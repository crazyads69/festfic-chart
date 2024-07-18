import type { Metadata } from "next";

import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";

import ReduxProvider from "@/redux/provider/provider";
import theme from "@/theme/theme";

export const metadata: Metadata = {
    title: "FestFic Ranking",
    description: "A ranking of the best FestFic stories",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <ReduxProvider>{children}</ReduxProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
