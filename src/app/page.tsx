"use client";

import useWattpadData from "@/hooks/use-get-wattpad-data";

import RankItem from "../components/page/main/rank_item";

export default function Home() {
    const { data, isLoading, error } = useWattpadData();

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-4xl font-bold">Welcome to my website</h1>
            <p className="text-center">This is a simple website built with Next.js</p>
            <p className="text-center">It fetches data from the Wattpad API and displays it here</p>
            {isLoading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center">An error occurred: {error.message}</p>}
            <div className="flex justify-center">
                <RankItem wattpadStory={data} />
            </div>
        </div>
    );
}
