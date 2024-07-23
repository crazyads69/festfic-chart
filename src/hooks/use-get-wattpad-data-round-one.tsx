/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export interface WattpadStory {
    id: number;
    title: string;
    description: string;
    cover: string;
    url: string;
    reads: number;
    votes: number;
    comments: number;
    author: string;
    modifyDate: string;
}

const useWattpadDataRoundOne = () => {
    const [data, setData] = useState<WattpadStory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const api = process.env.NEXT_PUBLIC_API_URL;
                const response = await fetch(`${api}/stories`);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const newStories: WattpadStory[] = await response.json();

                setData(newStories);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Run only on mount

    return { data, isLoading, error };
};

export default useWattpadDataRoundOne;
