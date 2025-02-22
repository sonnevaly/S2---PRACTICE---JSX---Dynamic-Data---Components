import { useState, useEffect } from "react";

function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return <h2>{time}</h2>;
}

export default Time;
