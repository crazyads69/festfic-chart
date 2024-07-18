"use client";

import { Box, CircularProgress } from "@mui/material";

import useWattpadData from "@/hooks/use-get-wattpad-data";
import WattpadStoriesList from "@/components/page/main/rank_item";

export default function Home() {
    const { data, isLoading, error } = useWattpadData();

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-start bg-white">
            <div className="sticky z-[300] flex h-fit w-full flex-row items-center justify-between px-[4.81rem] py-[1rem] shadow-lg">
                <h1 className="cursor-pointer select-none font-sans text-[1rem] font-bold text-[#fe5009]">
                    FestFic Ranking
                </h1>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center px-[4.81rem] py-[1rem]">
                {isLoading || data.length === 0 ? (
                    <Box
                        sx={{
                            position: "absolute", // Position the box absolutely
                            top: "50%", // Center vertically
                            left: "50%", // Center horizontally
                            transform: "translate(-50%, -50%)", // Use translate for centering
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    <WattpadStoriesList stories={data} />
                )}
            </div>
            {!isLoading && data.length > 0 && (
                <footer className="flex w-full items-center justify-center bg-gray-100 py-4">
                    <p className="text-gray-600">Made by ❤️ from crazyads69</p>
                </footer>
            )}
        </div>
    );
}
