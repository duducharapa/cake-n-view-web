import Star from "./Star";
import { RatingStarsProps, StarMode } from "./props";

const RatingStars = ({ value, ratings = 0, variant = "primary", noCounter = false }: RatingStarsProps) => {
    const formattedValue = value.toString().replace(".", ",");

    const textColor = `text-${variant === "primary" ? "white" : "gray"}`;
    const backgroundStar = variant === "primary" ? "white" : "gray";

    const starsTypes: StarMode[] = ["", "", "", "", ""].map(() => {
        if (value <= 0) return "none";

        const newValue: StarMode = value >= 1 ? "full" : "half";
        value -= 1;

        return newValue;
    });

    return (
        <div className={`flex flex-col md:flex-row gap-x-0 lg:gap-x-2 gap-y-1 lg:gap-y-0 font-semibold items-center lg:items-start ${textColor}`}>
            {
                !noCounter &&
                    <span className="mr-4 font-normal">{ratings} {ratings === 1 ? "avaliação" : "avaliações"}</span>
            }
            <div className="flex flex-row gap-x-2">
                {
                    starsTypes.map((type, index) => <Star filled={type} key={index} background={backgroundStar} />)
                }
                <span>{formattedValue}</span>
            </div>
        </div>
    );
};

export default RatingStars;
