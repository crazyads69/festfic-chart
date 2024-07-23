/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

import { WattpadStory } from "./use-get-wattpad-data-round-one";

const useWattpadDataRoundTwo = () => {
    const [data, setData] = useState<WattpadStory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const api = process.env.NEXT_PUBLIC_API_URL;
                const response = await fetch(`${api}/stories-round-2`);

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                let newStories: WattpadStory[] = await response.json();

                // Remove null values
                newStories = newStories.filter((story) => story !== null);
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

export default useWattpadDataRoundTwo;
