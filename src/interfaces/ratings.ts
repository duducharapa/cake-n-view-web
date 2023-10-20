type Rating = {
    id: number;
    number: number;
    comment: string;
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

export type {
    Rating,
    RatingListing
};
