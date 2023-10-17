type Cake = {
    id: number;
    name: string;
    averageRating: number;
    description: string;
    imageUrl: string;
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
