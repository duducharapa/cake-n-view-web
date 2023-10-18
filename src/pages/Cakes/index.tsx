import { useCallback, useEffect, useMemo, useState } from "react";
import { BiSearch } from "react-icons/bi";

import Navbar from "../../components/Navbar";
import { CakeListingPage } from "../../interfaces/cakes";
import CakeSearchRow from "../../components/CakeSearchRow";

import api from "../../services/api";
import Footer from "../../components/Footer";
import PaginationNav from "../../components/PaginationNav";

const Cakes = () => {
    const [cakesPage, setCakesPage] = useState<CakeListingPage>({} as CakeListingPage);
    const [page, setPage] = useState<number>(1);

    const getCakes = useCallback(async () => {
        const data = await api.getCakes({
            page: page - 1
        });

        setCakesPage(data);
    }, [page]);

    const totalPages = useMemo(() => {
        return cakesPage.totalPages || 0;
    }, [cakesPage]);

    const resultsInterval = useMemo(() => {
        if (!cakesPage.pageable) return {
            init: 0,
            final: 0
        };

        const { pageNumber, pageSize } = cakesPage.pageable;

        const intervalInit = (pageNumber * pageSize) + 1;
        const intervalFinal = (pageNumber * pageSize) + cakesPage.numberOfElements;

        return {
            init: intervalInit,
            final: intervalFinal
        };
    }, [cakesPage]);

    useEffect(() => {
        getCakes();
    }, [getCakes]);

    return (
        <>
            <Navbar />

            <div className="w-full bg-primary text-white">
                <main className="container mx-auto py-20 flex flex-col items-center">
                    <h1 className="text-7xl font-bold mb-6">Cake 'n View</h1>
                    <h4 className="text-4xl font-normal">Bolos e tortas</h4>
                </main>
            </div>

            <div className="w-full bg-primary">
                <div className="container mx-auto py-20 flex justify-center">
                    <div className="w-3/5 border-gray border-2 bg-white rounded flex items-center pl-5">
                        <BiSearch color="#79797C" size="24" />
                        <input type="text" className="bg-white p-3 text-gray w-full outline-none" placeholder="Busque um bolo" />
                    </div>
                </div>

                <section className="container mx-auto flex flex-col items-center gap-y-5 pb-20">
                    {
                        cakesPage.content?.map(cake => (
                            <CakeSearchRow cake={cake} key={cake.id} />
                        )) || <p>carregando</p>
                    }

                    <div className="w-3/5 flex flex-col items-end">
                        <p className="self-end">
                            <strong>{resultsInterval.init}</strong>-<strong>{resultsInterval.final}</strong> de
                            <strong> {cakesPage.totalElements}</strong> resultados
                        </p>
                    </div>
                    <PaginationNav actual={page} total={totalPages} onPageChange={(page) => setPage(page)} />
                </section>
            </div>

            <Footer />
        </>
    );
};

export default Cakes;
