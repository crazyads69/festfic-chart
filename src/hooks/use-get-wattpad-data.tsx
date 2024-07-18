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
                const URL =
                    "https://www.wattpad.com/v4/users/nwjnsfcvn/stories/published?offset=3&limit=3&fields=stories(title%2ClastPublishedPart%2CvoteCount%2CreadCount%2CcommentCount%2Ccover%2Ctags%2Curl%2Cid%2Cdescription%2Ccategories%2Ccompleted%2Cmature%2Crating%2Crankings%2CtagRankings%2CnumParts%2CfirstPartId%2Cparts%2CisPaywalled%2CpaidModel)%2Ctotal%2CnextUrl%2CnumPublished%2CnumDrafts";
                const response = await fetch(
                    "https://www.wattpad.com/v4/users/nwjnsfcvn/stories/published?offset=3&limit=3&fields=stories(title%2ClastPublishedPart%2CvoteCount%2CreadCount%2CcommentCount%2Ccover%2Ctags%2Curl%2Cid%2Cdescription%2Ccategories%2Ccompleted%2Cmature%2Crating%2Crankings%2CtagRankings%2CnumParts%2CfirstPartId%2Cparts%2CisPaywalled%2CpaidModel)%2Ctotal%2CnextUrl%2CnumPublished%2CnumDrafts",
                    {
                        headers: {
                            accept: "application/json, text/javascript, */*; q=0.01",
                            "accept-language": "vi,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
                            authorization: "IwKhVmNM7VXhnsVb0BabhS",
                            "if-none-match": 'W/"73ac145bd30f76d0781809963fabd0b1b3595217"',
                            priority: "u=1, i",
                            "sec-ch-ua":
                                '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                            "sec-ch-ua-mobile": "?1",
                            "sec-ch-ua-platform": '"Android"',
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-requested-with": "XMLHttpRequest",
                        },
                        referrer: "https://www.wattpad.com/user/nwjnsfcvn",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        body: null,
                        method: "GET",
                        mode: "cors",
                        credentials: "include",
                    },
                );

                if (!response.ok) {
                    throw new Error(`Wattpad API request failed with status: ${response.status}`);
                }

                const data = await response.json();
                const stories = data.total;

                const allStoriesResponse = await fetch(
                    `https://www.wattpad.com/v4/users/nwjnsfcvn/stories/published?limit=${stories}&fields=stories(title%2ClastPublishedPart%2CvoteCount%2CreadCount%2CcommentCount%2Ccover%2Ctags%2Curl%2Cid%2Cdescription%2Ccategories%2Ccompleted%2Cmature%2Crating%2Crankings%2CtagRankings%2CnumParts%2CfirstPartId%2Cparts%2CisPaywalled%2CpaidModel)%2Ctotal%2CnextUrl%2CnumPublished%2CnumDrafts`,
                    {
                        headers: {
                            accept: "application/json, text/javascript, */*; q=0.01",
                            "accept-language": "vi,en-US;q=0.9,en;q=0.8,fr-FR;q=0.7,fr;q=0.6",
                            authorization: "IwKhVmNM7VXhnsVb0BabhS",
                            "if-none-match": 'W/"73ac145bd30f76d0781809963fabd0b1b3595217"',
                            priority: "u=1, i",
                            "sec-ch-ua":
                                '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
                            "sec-ch-ua-mobile": "?1",
                            "sec-ch-ua-platform": '"Android"',
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "sec-gpc": "1",
                            "x-requested-with": "XMLHttpRequest",
                        },
                        referrer: "https://www.wattpad.com/user/nwjnsfcvn",
                        referrerPolicy: "strict-origin-when-cross-origin",
                        body: null,
                        method: "GET",
                        mode: "cors",
                        credentials: "include",
                    },
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
