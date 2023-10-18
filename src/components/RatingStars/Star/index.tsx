import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { StarProps } from "./props";

const Star = ({ filled, background = "white" }: StarProps) => {
    const emptyColor = background === "white" ? "#FFE9D6" : "#79797C";

    const stars = {
        "full": (
            <FaStar color="#E5C224" size="24" />
        ),
        "half": (
            <FaStarHalfAlt color="#E5C224" size="24" />
        ),
        "none": (
            <FaStar size="24" color={emptyColor} />
        )
    };

    return stars[filled];
};

export default Star;
