import { intervalToDuration } from "date-fns";

import { NextCakeCounterProps } from "./props";

const NextCakeCounter = ({ expiresAt }: NextCakeCounterProps) => {
    const now = new Date();
    const expiresDate = new Date(expiresAt);

    const { hours, minutes } = intervalToDuration({
        start: now,
        end: expiresDate
    });

    return (
        <p className="text-black mt-2 text-lg">
            <strong className="text-primary mr-1">{hours}h : {minutes}min</strong>
            para uma nova receita surgir
        </p>
    );
};

export default NextCakeCounter;
