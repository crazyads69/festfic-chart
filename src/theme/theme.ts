"use client";

import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["300", "400", "500", "700"], // thin, regular, medium, bold
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    typography: {
        fontFamily: inter.style.fontFamily,
    },
});

export default theme;
