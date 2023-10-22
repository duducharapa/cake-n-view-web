import { intervalToDuration } from "date-fns";
import { BsClockFill } from "react-icons/bs";

import { NextCakeCounterProps } from "./props";

const NextCakeCounter = ({ expiresAt }: NextCakeCounterProps) => {
    const now = new Date();
    const expiresDate = new Date(expiresAt);

    const { hours, minutes } = intervalToDuration({
        start: now,
        end: expiresDate
    });

    return (
        <div className="text-black mt-5 text-md lg:text-lg flex items-center flex-col md:flex-row">
            <div className="flex flex-row">
                <BsClockFill color="#F82530" size={24} />
                <strong className="text-primary ml-2 mr-1">{hours}h : {minutes}min</strong>
            </div>
            para uma nova receita surgir
        </div>
    );
};

export default NextCakeCounter;
