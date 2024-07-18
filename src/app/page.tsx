"use client";

import Link from "next/link";

import RankItem from "@/components/page/main/rank_item";
import useWattpadData from "@/hooks/use-get-wattpad-data";

export default function Home() {
    const { data, isLoading, error } = useWattpadData();

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-start bg-white">
            <div className="sticky z-[300] flex h-fit w-full flex-row items-center justify-center px-[4.81rem] py-[1rem] shadow-lg lg:justify-between">
                <h1 className="cursor-pointer select-none font-sans text-[1rem] font-bold text-[#fe5009]">
                    FestFic Ranking
                </h1>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center px-2 py-2 sm:px-4 lg:px-32">
                {isLoading || data.length === 0 ? (
                    <div className="flex min-h-screen w-full flex-row items-center justify-center">
                        <div
                            aria-label="loading"
                            className="inline-block h-10 w-10 animate-spin rounded-full border-[4px] border-current border-t-transparent text-[#fe5009]"
                            role="status"
                        >
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <RankItem stories={data} />
                )}
            </div>
            {/* Footer */}
            <footer className="flex w-full items-center justify-center bg-gray-100 py-4">
                <p className="text-gray-600">
                    Made by ❤️ from
                    <Link legacyBehavior passHref href="https://www.wattpad.com/user/crazyads69">
                        <a
                            className="pl-1 text-blue-500 hover:text-blue-700 hover:underline"
                            target="_blank"
                        >
                            crazyads69
                        </a>
                    </Link>
                </p>
            </footer>
        </div>
    );
}
