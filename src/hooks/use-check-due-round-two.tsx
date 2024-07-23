import { useEffect, useState } from "react";

import { unlockDate } from "@/utils/const";

export default function useCheckDueRoundTwo() {
    const [isDue, setIsDue] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [dueTime, setDueTime] = useState<string>("");

    const checkDueRoundTwo = async () => {
        setError(null);

        try {
            const response = await fetch(`https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh`);

            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            const serverTime = new Date(data.utc_datetime);
            const today = serverTime; // Use the time from the server
            const target = new Date(unlockDate);

            if (today >= target) {
                setIsDue(true);
            } else {
                const timeRemaining = Number(target) - Number(today);
                const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hoursRemaining = Math.floor(
                    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
                );
                const minutesRemaining = Math.floor(
                    (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
                );

                setDueTime(
                    `${daysRemaining} ngày, ${hoursRemaining} giờ, ${minutesRemaining} phút`,
                );
                setIsDue(false);
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
            }
        }
    };

    useEffect(() => {
        checkDueRoundTwo();
    }, []);

    return { isDue, error, dueTime };
}
