import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";

import Navbar from "../../components/Navbar";
import { Cake } from "../../interfaces/cakes";
import CakeSearchRow from "../../components/CakeSearchRow";
import PaginationNav from "../../components/PaginationNav";
import Footer from "../../components/Footer";

import api from "../../services/api";
import { PageMetadata } from "../../interfaces/pages";

const Cakes = () => {
    const PAGE_SIZE = 10;

    const [cakes, setCakes] = useState<Cake[]>([] as Cake[]);
    const [page, setPage] = useState<number>(0);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading]= useState<boolean>(true);

    const [pageMetadata, setPageMetadata] = useState<PageMetadata>({
        numberOfElements: 0,
        totalElements: 0,
        totalPages: 0
    });

    const getCakes = useCallback(async () => {
        setLoading(true);

        const data = await api.getCakes({
            page: page,
            name: search
        });

        const { content, numberOfElements, totalElements, totalPages } = data;
        setCakes([ ...content ]);
        setPageMetadata({
            numberOfElements, totalElements, totalPages
        });

        setLoading(false);
    }, [page, search]);

    const resultsInterval = useMemo(() => {
        const { numberOfElements } = pageMetadata;

        const intervalInit = (page * PAGE_SIZE) + 1;
        const intervalFinal = (page * PAGE_SIZE) + numberOfElements;

        return {
            init: intervalInit,
            final: intervalFinal
        };
    }, [page, pageMetadata]);

    const handleSeach = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
        setPage(0);
    };

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    };

    useEffect(() => {
        getCakes();
    }, [getCakes]);

    return (
        <>
            <Navbar />

            <div className="w-full bg-primary text-white">
                <main className="container mx-auto py-20 flex flex-col items-center">
                    <h1 className="text-7xl font-bold mb-6">Cake 'n View</h1>
                    <h4 className="text-4xl font-normal font-autour">Bolos e tortas</h4>
                </main>
            </div>

            <div className="w-full bg-primary">
                <div className="container mx-auto pt-10 pb-20 flex justify-center">
                    <div className="w-3/5 border-white border-2 bg-white rounded flex items-center pl-5">
                        <BiSearch color="#79797C" size="24" />
                        <input
                            className="bg-white p-3 text-gray w-full outline-none"
                            placeholder="Busque um bolo"
                            onChange={handleSeach}
                            value={search}
                        />
                    </div>
                </div>

                <section className="container mx-auto flex flex-col items-center gap-y-5 pb-20">
                    <h3 className="text-2xl">
                        Buscando por
                        <strong> "{search}"</strong>
                    </h3>

                    {
                        loading ?
                            <p>loading</p> :
                            cakes.map((cake, index) => (
                                <motion.div
                                    className="w-full flex justify-center"
                                    initial={{
                                        opacity: 0,
                                        y: 20
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0
                                    }}
                                    transition={{
                                        delay: index * 0.2,
                                        duration: 0.5
                                    }}
                                >
                                    <CakeSearchRow cake={cake} key={cake.id} />
                                </motion.div>
                            ))
                    }

                    <div className="w-3/5 flex flex-col items-end">
                        <p className="self-end">
                            <strong>{resultsInterval.init}</strong>-<strong>{resultsInterval.final}</strong> de
                            <strong> {pageMetadata.totalElements}</strong> resultados
                        </p>
                    </div>
                    <PaginationNav
                        actual={page}
                        total={pageMetadata.totalPages}
                        onPageChange={(pageNumber) => handlePageChange(pageNumber)}
                    />
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Cakes;
