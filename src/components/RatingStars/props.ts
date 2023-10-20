interface RatingStarsProps {
    value: number;
    ratings?: number;
    variant?: "primary" | "secondary";
    noCounter?: boolean;
}

type StarMode = "full" | "half" | "none";

export type {
    RatingStarsProps,
    StarMode
};
