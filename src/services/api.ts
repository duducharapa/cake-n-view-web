import axios from "axios";
import { Cake, CakeListingPage, CakeListingParams, DailyCake } from "../interfaces/cakes";

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

export default {
    getDailyCake,
    getTrendingCakes,
    getCakes
};
