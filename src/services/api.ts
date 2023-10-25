import axios from "axios";

import { Cake, CakeDetails, CakeListingPage, CakeListingParams, DailyCake } from "../interfaces/cakes";
import { RateCake, RatingListing } from "../interfaces/ratings";
import { AuthCredentials, AuthResponse } from "../interfaces/auth";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

const getDailyCake = async (): Promise<DailyCake> => {
    const { data, status } = await api.get<DailyCake>("/cakes/daily");

    if (status === 200) return data;
    return {} as DailyCake;
};

const getTrendingCakes = async (): Promise<Cake[]> => {
    const { data, status } = await api.get<Cake[]>("/cakes/trendings");

    if (status === 200) return data;
    return [] as Cake[];
};

const getCakes = async (params?: CakeListingParams): Promise<CakeListingPage> => {
    const { data, status } = await api.get<CakeListingPage>("/cakes", {
        params: {
            page: params?.page || 0
        }
    });

    if (status === 200) return data;
    return {} as CakeListingPage;
};

const getRatings = async (cakeId: number): Promise<RatingListing> => {
    const { data, status } = await api.get<RatingListing>("/ratings", {
        params: {
            cakeId
        }
    });

    if (status !== 200) throw new Error("Cannot get ratings");
    return data;
};

const findCake = async (id: number): Promise<CakeDetails> => {
    const { data: cake, status } = await api.get<Cake>(`/cakes/${id}`);
    if (status !== 200) throw new Error("Cannot find cake");

    const ratings = await getRatings(id);
    return {
        cake,
        ratings
    };
};

const login = async (credentials: AuthCredentials): Promise<AuthResponse> => {
    const { email, password } = credentials;

    try {
        const { data, status } = await api.post<AuthResponse>("/login", {}, {
            headers: {
                "username": email,
                password
            }
        });

        if (status === 201) return data;
        return {
            token: ""
        } as AuthResponse;
    } catch (ex) {
        throw new Error("Credentials not match");
    }

};

const rateCake = async (body: RateCake, authToken: string): Promise<boolean> => {
    const { comment } = body;

    try {
        const { status } = await api.post("/ratings", {
            ...body,
            ...(comment !== "" && { comment })
        }, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });

        if (status === 201) return true;
        return false;
    } catch (ex) {
        return false;
    }
};

export default {
    getDailyCake,
    getTrendingCakes,
    getCakes,
    findCake,
    login,
    rateCake
};
