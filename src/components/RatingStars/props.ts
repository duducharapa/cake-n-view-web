interface RatingStarsProps {
    value: number;
    ratings: number;
}

type StarMode = "full" | "half" | "none";

export type {
    RatingStarsProps,
    StarMode
};
