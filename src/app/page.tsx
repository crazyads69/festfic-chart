"use client";

import RankItem from "@/components/page/main/rank_item";
import Header from "@/components/global/header/header";
import useWattpadDataRoundOne from "@/hooks/use-get-wattpad-data-round-one";

export default function Home() {
    const { data, isLoading, error } = useWattpadDataRoundOne();

    return (
        <>
            <Header />
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
                    <>
                        <div className="flex h-fit w-full flex-row items-center justify-between text-black">
                            <h1 className="m-4 select-none self-start text-2xl font-bold text-black">
                                Danh sách truyện vòng 1
                            </h1>
                        </div>
                        <RankItem stories={data} />
                    </>
                )}
            </div>
        </>
    );
}
