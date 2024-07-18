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
}

const useWattpadData = () => {
    const [data, setData] = useState<WattpadStory[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const allStoriesResponse = await fetch(
                    "https://raw.githubusercontent.com/crazyads69/festfic-chart/main/data/data.json",
                );
                const allStoriesData = await allStoriesResponse.json();

                // Map the data to the format we want
                const newStories: WattpadStory[] = allStoriesData.stories.map((story: any) => ({
                    id: story.id,
                    title: story.title,
                    description: story.description,
                    cover: story.cover,
                    url: story.url,
                    reads: story.readCount,
                    votes: story.voteCount,
                    comments: story.commentCount,
                }));

                // Sort the stories by votes
                newStories.sort((a, b) => b.votes - a.votes);
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

export default useWattpadData;
