import { useEffect, useState } from 'react'


export const useProgress = (timeProgress: number) => {
    const [progress, setProgress] = useState(100);
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev <= 0) { clearInterval(interval) }
                return prev - 1
            });
        }, (timeProgress * 10));
        return () => {
            clearInterval(interval);
        };
    }, [timeProgress]);
    return {
        progressToast: progress
    }
}
