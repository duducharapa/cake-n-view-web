import Navbar from "./Navbar";
import apresentation from "../../assets/apresentation.png";
import CakeDayCard from "./CakeDayCard";
import NextCakeCounter from "./NextCakeCounter";
import SectionHeader from "../../components/SectionHeader";
import TrendCakeCard from "../../components/TrendCakeCard";

const Landing = () => {
    return (
        <>
            <Navbar />
            <div className="bg-primary w-full">
                <main className="container mx-auto py-20 flex items-center justify-center flex-row">
                    <img src={apresentation} alt="Cake 'n view" className="mr-10" />
                    <div className="ml-10">
                        <hgroup className="font-cabin font-normal mb-12">
                            <h4 className="text-4xl">Bem vindo ao</h4>
                            <h1 className="text-7xl font-bold mb-6">Cake 'n View</h1>

                            <h3 className="text-3xl">Tenha <strong className="text-secondary">ideias</strong></h3>
                            <h3 className="text-3xl">Saboreie <strong className="text-terciary">resultados</strong></h3>
                        </hgroup>

                        <button className="bg-primaryDark w-[268px] h-[96px] rounded-lg flex items-center justify-center shadow-[4px_6px_4px_0px_rgba(0,0,0,0.4)]">
                            <p className="text-2xl font-semibold">HORA DE PROVAR</p>
                        </button>
                    </div>
                </main>
            </div>

            <div className="w-full h-[100px] bg-gradient-to-b from-primary to-white"></div>

            <div className="bg-white w-full">
                <section className="container mx-auto py-20 flex flex-col items-center">
                    <SectionHeader title="Bolo do dia" />

                    <CakeDayCard />
                    <NextCakeCounter />
                </section>
            </div>

            <div className="w-full h-[100px] bg-gradient-to-b from-white to-secondary"></div>

            <div className="bg-secondary w-full">
                <section className="container mx-auto py-20 flex flex-col items-center">
                    <SectionHeader title="Destaques" />

                    <div className="flex flex-col w-full items-center gap-y-12">
                        <TrendCakeCard />
                        <TrendCakeCard />
                        <TrendCakeCard />
                    </div>
                </section>
            </div>

            <div className="w-full h-[100px] bg-gradient-to-b from-secondary to-terciaryDark"></div>

            <footer className="bg-terciaryDark w-full text-white">
                <div className="container mx-auto pt-20 pb-5 flex flex-col items-center">
                    <h6 className="text-center text-3xl font-autour">Cake 'n View</h6>

                    <nav className="mt-2 mb-6 w-full flex justify-center gap-x-10">
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