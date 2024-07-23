/* eslint-disable no-nested-ternary */
import Image from "next/image";

import { WattpadStory } from "@/hooks/use-get-wattpad-data-round-one";

export interface RankItemTwoProps {
    stories: WattpadStory[];
}

export default function RankItemTwo({ stories }: RankItemTwoProps) {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center">
            {stories.map((story, index) => (
                <div
                    key={story.id}
                    className="relative my-4 flex h-fit w-[90%] flex-row items-center justify-center rounded-md p-2 shadow-lg hover:bg-gray-200 hover:shadow-2xl"
                >
                    <Image
                        alt={story.description}
                        className="h-35 w-40 rounded-md"
                        height={100}
                        src={story.cover}
                        width={100}
                    />
                    {/* Info */}
                    <div className="ml-2 flex h-full w-full flex-col items-start justify-start self-start pr-8 text-black">
                        <h1 className="mb-2 text-xs font-bold lg:text-xl">
                            {`${story.title} - ${story.author}`}
                        </h1>
                        <p className="text-xs font-normal lg:text-lg">
                            {story.description.length > 50
                                ? `${story.description.slice(0, 50)}...`
                                : story.description}
                        </p>
                        <div className="flex h-fit w-fit flex-col items-start justify-start align-bottom md:mt-2">
                            <p className="mt-2 text-xs font-normal lg:text-lg">
                                <span className="font-xs font-bold lg:text-lg">Số lượt đọc: </span>
                                {story.reads}
                            </p>
                            <p className="text-xs font-normal lg:text-lg">
                                <span className="font-xs font-bold lg:text-lg">Số lượt vote: </span>
                                {story.votes}
                            </p>
                            <p className="text-xs font-normal lg:text-lg">
                                <span className="font-xs font-bold lg:text-lg">
                                    Số lượt comment:{" "}
                                </span>
                                {story.comments}
                            </p>
                            <p className="text-xs font-normal lg:text-lg">
                                <span className="font-xs font-bold lg:text-lg">Cập nhật vào: </span>
                                {new Date(story.modifyDate).toLocaleString("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: false, // Use 24-hour format
                                    timeZone: "Asia/Bangkok", // GMT+07
                                })}
                            </p>
                        </div>
                    </div>
                    {/* Rank */}
                    <div className="absolute right-4 top-1/2 ml-2 flex h-fit w-fit -translate-y-1/2 flex-col items-center justify-center text-black">
                        <h1
                            className="text-base font-bold lg:text-xl"
                            style={{
                                color:
                                    index === 0
                                        ? "#FFD700" // Gold
                                        : index === 1
                                          ? "#C0C0C0" // Silver
                                          : index === 2
                                            ? "#CD7F32" // Bronze
                                            : "black", // Default color
                            }}
                        >
                            #{index + 1}
                        </h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
