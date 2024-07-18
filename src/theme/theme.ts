"use client";

import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
    weight: ["300", "400", "500", "700"], // thin, regular, medium, bold
    subsets: ["latin"],
    display: "swap",
});

const theme = createTheme({
    palette: {
        primary: {
            main: "#fe5009", // Primary color
            light: "#fe6121", // Lighter shade of primary
            dark: "#fe723a", // Darker shade of primary
            contrastText: "#ffffff", // Text color for primary background
        },
        secondary: {
            main: "#feede6", // Secondary color
            contrastText: "#000000", // Text color for secondary background
        },
        background: {
            default: "#ffffff", // Default background color
            paper: "#ffffff", // Background color for paper components
        },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
    },
});

export default theme;
