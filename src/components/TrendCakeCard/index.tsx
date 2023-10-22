import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { TrendCakeCardProps } from "./props";
import paths from "../../routes/paths";
import RatingStars from "../RatingStars";
import { useRef } from "react";

const TrendCakeCard = ({ cake, animation }: TrendCakeCardProps) => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref);
    const { name, imageUrl, description, id, rating } = cake;

    const handleClick = () => navigate(paths.CAKE.replace(":id", id.toString()));

    return (
        <motion.div
            ref={ref}
            className="w-full md:w-4/5"
            initial={{ x: animation === "left" ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ cursor: "pointer", y: -10 }}
            viewport={{ once: true }}
            transition={{
                duration: isInView ? 0.4 : 1
            }}
            onClick={handleClick}
        >
            <article className="w-full rounded bg-white border-primary p-8 flex flex-col">
                <h4 className="text-primary text-center text-4xl font-bold mb-5">{name}</h4>

                <div className="w-full flex flex-col lg:flex-row h-auto lg:h-[200px] items-center lg:items-start gap-y-5 lg:gap-y-0">
                    <img src={imageUrl} alt="Bolo de morango com creme" className="rounded w-auto md:w-[200px]" />

                    <div className="flex ml-0 lg:ml-5 flex-col h-full w-full justify-between gap-y-10 lg:gap-y-0">
                        <div className="w-full flex flex-col items-center text-black">
                            <p className="text-md text-justify h-[100px] overflow-hidden">{description}</p>
                            <span className="text-2xl">...</span>
                        </div>

                        <div className="w-full flex justify-center lg:justify-end self-end">
                            <RatingStars value={rating.average} ratings={rating.quantity} variant="secondary" />
                        </div>
                    </div>
                </div>
            </article>
        </motion.div>
    );
};

export default TrendCakeCard;
