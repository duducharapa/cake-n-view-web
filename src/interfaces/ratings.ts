import { User } from "./user";

type Rating = {
    id: number
    number: number
    comment: string
    user: User
};

type RatingListing = {
    content: Rating[]
    pageable: {
        pageNumber: number;
        pageSize: number;
    };
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
};

type RateCake = {
    number: number;
    comment?: string;
    cakeId: number;
};

export type {
    Rating,
    RatingListing,
    RateCake
};
