/* eslint-disable react/jsx-no-useless-fragment */

"use client";

import useWattpadDataRoundTwo from "@/hooks/use-get-wattpad-data-round-two";
import Header from "@/components/global/header/header";
import RankItemTwo from "@/components/page/round-two/rank-item-two";
import useCheckDueRoundTwo from "@/hooks/use-check-due-round-two";

export default function Home() {
    const { data, isLoading, error } = useWattpadDataRoundTwo();
    const { isDue, dueTime } = useCheckDueRoundTwo();

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
                        {isDue ? (
                            <>
                                <div className="flex h-fit w-full flex-row items-center justify-between text-black">
                                    <h1 className="m-4 select-none self-start text-2xl font-bold text-black">
                                        Danh sách truyện vòng 2
                                    </h1>
                                </div>
                                <RankItemTwo stories={data} />
                            </>
                        ) : (
                            <div className="flex h-screen w-full flex-col items-center justify-center">
                                <h1 className="text-md select-none font-bold text-black lg:text-2xl">
                                    Chưa đến thời gian bắt đầu vote cho vòng 2
                                </h1>
                                <p className="text-md select-none font-normal text-black lg:text-xl">
                                    Bảng xếp hạng sẽ được cập nhật sau:
                                </p>
                                <p className="text-md select-none font-normal text-black lg:text-xl">
                                    {dueTime}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
