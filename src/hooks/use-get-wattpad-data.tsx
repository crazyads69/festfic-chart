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
                let index = 0;
                const newStories: WattpadStory[] = allStoriesData.stories.map((story: any) => ({
                    // use index as id
                    id: index++,
                    title: story.title,
                    description: story.description,
                    cover: story.cover,
                    url: story.url,
                    reads: story.readCount,
                    votes: story.voteCount,
                    comments: story.commentCount,
                }));

                // Stable Sort Implementation
                newStories.sort((a, b) => {
                    if (a.votes === b.votes) {
                        if (a.comments === b.comments) {
                            if (a.reads === b.reads) {
                                return b.id - a.id;
                            }

                            return b.reads - a.reads;
                        }

                        return b.comments - a.comments;
                    }

                    return b.votes - a.votes;
                });
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
