import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { StarProps } from "./props";

const Star = ({ filled }: StarProps) => {
    const stars = {
        "full": (
            <FaStar color="#E5C224" size="24" />
        ),
        "half": (
            <FaStarHalfAlt color="#E5C224" size="24" />
        ),
        "none": (
            <FaStar size="24" />
        )
    };

    return stars[filled];
};

export default Star;
