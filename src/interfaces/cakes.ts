type Cake = {
    id: number;
    name: string;
    averageRating: number;
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

export type {
    Cake,
    DailyCake
};
