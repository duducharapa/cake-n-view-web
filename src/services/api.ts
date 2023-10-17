import axios from "axios";
import { Cake, DailyCake } from "../interfaces/cakes";

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

    if (status == 200) return data;
    return [] as Cake[];
};

export default {
    getDailyCake,
    getTrendingCakes
};
