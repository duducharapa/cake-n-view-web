import Star from "./Star";
import { RatingStarsProps, StarMode } from "./props";

const RatingStar = ({ value, ratings }: RatingStarsProps) => {
    const formattedValue = value.toString().replace(".", ",");

    const starsTypes: StarMode[] = ["", "", "", "", ""].map(() => {
        if (value <= 0) return "none";

        const newValue: StarMode = value >= 1 ? "full" : "half";
        value -= 1;

        return newValue;
    });

    return (
        <div className="flex flex-row gap-x-2 font-semibold">
            <span className="mr-4 font-normal">{ratings} {ratings === 1 ? "avaliação" : "avaliações"}</span>
            {
                starsTypes.map((type, index) => <Star filled={type} key={index} />)
            }
            <span>{formattedValue}</span>
        </div>
    );
};

export default RatingStar;
