import { useLoaderData, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../../components/Navbar";
import { CakeDetails } from "../../interfaces/cakes";
import Footer from "../../components/Footer";
import RatingStars from "../../components/RatingStars";
import RatingRow from "../../components/RatingRow";
import BackButton from "../../components/BackButton";
import { useAuth } from "../../hooks/auth";
import paths from "../../routes/paths";
import { useState } from "react";
import RateCakeModal from "../../components/RateCakeModal";

const CakePage = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const cakeDetails = useLoaderData() as CakeDetails;
    const { name, imageUrl, rating, description } = cakeDetails.cake;
    const { content: ratings } = cakeDetails.ratings;

    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleRating = () => {
        if (!isAuthenticated) navigate(paths.AUTH);

        setOpenModal(true);
    };

    return (
        <>
            <Navbar />

            <div className="w-full bg-primary">
                <main className="container mx-auto py-20 flex flex-col items-center px-10 lg:px-0">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Cake 'n View</h1>
                </main>
            </div>

            <div className="w-full bg-white">
                <div className="container mx-auto px-10 lg:px-20 pt-20 pb-10">
                    <BackButton />
                </div>
                <section className="container mx-auto pb-20 flex flex-col lg:flex-row justify-around px-10 lg:px-20 gap-y-5 lg:gap-y-0">

                    <div className="flex flex-col items-center gap-y-5">
                        <img src={imageUrl} alt={name} className="w-[400px] rounded" />
                        <RatingStars ratings={rating.quantity} value={rating.average} variant="secondary" />
                    </div>
                    <div className="ml-0 lg:ml-10 flex flex-col gap-y-5">
                        <h4 className="text-primary text-4xl md:text-5xl font-semibold text-center">{name}</h4>
                        <p className="text-black text-lg text-justify">{description}</p>
                    </div>
                </section>

                <div className="container mx-auto pb-10 lg:pb-20 flex flex-col items-center lg:items-end px-10 lg:px-20 gap-y-3">
                    <motion.button
                        className="bg-primary rounded h-[84px] w-[256px] shadow-[4px_6px_4px_0px_rgba(0,0,0,0.4)] hover:bg-primaryDark duration-300"
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        whileTap={{ scale: 0.5 }}
                        onClick={handleRating}
                    >
                        <span className="font-bold text-xl">Deixar sua avaliação</span>
                    </motion.button>
                    {
                        !isAuthenticated && <span className="text-error">É preciso estar autenticado para avaliar este bolo</span>
                    }
                </div>

                <section className="container mx-auto pt-10 pb-20 flex flex-col items-center gap-y-5 px-10 lg:px-20">
                    <h2 className="text-primary text-3xl font-semibold">Avaliações ({rating.quantity})</h2>

                    <div className="w-full rounded bg-primary flex flex-col items-center py-10 gap-y-5">
                        {
                            ratings.map(rating => (
                                <RatingRow rating={rating} key={rating.id} />
                            )) || <p>Não há avaliações</p>
                        }
                    </div>
                </section>
            </div>

            <Footer />

            <RateCakeModal open={openModal} onClose={() => setOpenModal(false)} cake={cakeDetails.cake} />
        </>
    );
};

export default CakePage;
