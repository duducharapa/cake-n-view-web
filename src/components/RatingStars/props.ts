interface RatingStarsProps {
    value: number;
    ratings: number;
    variant?: "primary" | "secondary";
}

type StarMode = "full" | "half" | "none";

export type {
    RatingStarsProps,
    StarMode
};
