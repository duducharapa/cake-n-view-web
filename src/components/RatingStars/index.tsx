import Star from "./Star";
import { RatingStarsProps, StarMode } from "./props";

const RatingStars = ({ value, ratings, variant = "primary" }: RatingStarsProps) => {
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
        <div className={`flex flex-row gap-x-2 font-semibold ${textColor}`}>
            <span className="mr-4 font-normal">{ratings} {ratings === 1 ? "avaliação" : "avaliações"}</span>
            {
                starsTypes.map((type, index) => <Star filled={type} key={index} background={backgroundStar} />)
            }
            <span>{formattedValue}</span>
        </div>
    );
};

export default RatingStars;
