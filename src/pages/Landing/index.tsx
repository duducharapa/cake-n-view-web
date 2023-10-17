import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navbar from "./Navbar";
import apresentation from "../../assets/apresentation.png";
import CakeDayCard from "../../components/CakeDayCard";
import NextCakeCounter from "./NextCakeCounter";
import SectionHeader from "../../components/SectionHeader";
import TrendCakeCard from "../../components/TrendCakeCard";
import api from "../../services/api";
import { Cake, DailyCake } from "../../interfaces/cakes";

const Landing = () => {
    const [dailyCake, setDailyCake] = useState<DailyCake>({} as DailyCake);
    const [trendingCakes, setTrendingCakes] = useState<Cake[]>([] as Cake[]);

    const getDailyCake = useCallback(async () => {
        const data = await api.getDailyCake();

        setDailyCake(data);
    }, []);

    const getTrendingCakes = useCallback(async () => {
        const data = await api.getTrendingCakes();

        setTrendingCakes(data);
    }, []);

    useEffect(() => {
        getDailyCake();
        getTrendingCakes();
    }, [getDailyCake, getTrendingCakes]);

    return (
        <>
            <Navbar />
            <div className="bg-primary w-full">
                <main className="container mx-auto py-20 flex items-center justify-center flex-row">
                    <img src={apresentation} alt="Cake 'n view" className="mr-10" />
                    <div className="ml-10">
                        <hgroup className="font-cabin font-normal mb-12">
                            <h4 className="text-3xl">Bem vindo ao</h4>
                            <h1 className="text-7xl font-bold mb-6">Cake 'n View</h1>

                            <h3 className="text-2xl">Tenha <strong className="text-secondary">ideias</strong></h3>
                            <h3 className="text-2xl">Saboreie <strong className="text-terciary">resultados</strong></h3>
                        </hgroup>

                        <motion.a
                            whileHover={{ scale: 1.1, cursor: "pointer" }}
                            whileTap={{ scale: 0.5 }}
                            className="bg-primaryDark w-[240px] h-[84px] rounded-lg flex items-center justify-center shadow-[4px_6px_4px_0px_rgba(0,0,0,0.4)] hover:bg-primaryDarker duration-300"
                        >
                            <p className="text-xl font-semibold">HORA DE PROVAR</p>
                        </motion.a>
                    </div>
                </main>
            </div>

            <div className="bg-white w-full">
                <section className="container mx-auto py-20 flex flex-col items-center">
                    <SectionHeader title="Bolo do dia" subtitle="Cairia bem um certo bolo hoje! Quer adivinhar qual?" mode="secondary" />

                    {
                        dailyCake?.id ? (
                            <div className="w-full relative flex flex-col items-center">
                                <CakeDayCard cake={dailyCake} />
                            </div>
                        ) : <p>carregando</p>
                    }

                    <NextCakeCounter />
                </section>
            </div>

            <div className="bg-primary w-full">
                <section className="container mx-auto py-20 flex flex-col items-center">
                    <SectionHeader title="Destaques" subtitle="Estes bolos são os queridinhos da galera! Que tal dar uma olhada?" />

                    <div className="flex flex-col w-full items-center gap-y-12">
                        {
                            trendingCakes.map((cake, index) => (
                                <TrendCakeCard cake={cake} key={cake.id} animation={index % 2 == 0 ? "right" : "left"} />
                            )) || <p>carregando</p>
                        }
                    </div>

                    <a href="/cakes" className="text-2xl font-semibold hover:underline mt-20 mb-2">E muitas outras opções!</a>
                </section>
            </div>

            <footer className="bg-primaryDark w-full text-white">
                <div className="container mx-auto pt-10 pb-5 flex flex-col items-center">
                    <h6 className="text-center text-3xl font-autour">Cake 'n View</h6>

                    <nav className="mt-2 mb-10 w-full flex justify-center gap-x-10">
                        <a href="/cakes" className="hover:underline">Bolos e tortas</a>
                        <a href="/ratings" className="hover:underline">Avaliações</a>
                        <a href="/about" className="hover:underline">Sobre mim</a>
                    </nav>

                    <p className="text-sm">Made by Eduardo Charapa. All rights reserved.</p>
                </div>
            </footer>

        </>
    );
};

export default Landing;
