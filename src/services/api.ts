import axios from "axios";
import { Cake, CakeDetails, CakeListingPage, CakeListingParams, DailyCake } from "../interfaces/cakes";
import { RatingListing } from "../interfaces/ratings";

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

export default {
    getDailyCake,
    getTrendingCakes,
    getCakes,
    findCake
};
