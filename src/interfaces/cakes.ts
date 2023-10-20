import { RatingListing } from "./ratings";

type Cake = {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    rating: {
        average: number;
        quantity: number;
    }
};

type DailyCake = {
    id: number;
    cake: Cake;
    expiresAt: string;
};

type CakeListingPage = {
    content: Cake[];
    pageable: {
        pageNumber: number;
        pageSize: number;
    };
    totalPages: number;
    totalElements: number;
    numberOfElements: number;
}

type CakeListingParams = {
    page?: number;
    name: string;
}

type CakeDetails = {
    cake: Cake;
    ratings: RatingListing
}

export type {
    Cake,
    DailyCake,
    CakeListingPage,
    CakeListingParams,
    CakeDetails
};
