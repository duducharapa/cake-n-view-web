import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import { CakeDayCardProps } from "./props";
import RatingStars from "../RatingStars";
import paths from "../../routes/paths";
import { useRef } from "react";

const CakeDayCard = ({ cake }: CakeDayCardProps) => {
    const navigate = useNavigate();
    const ref = useRef(null);
    const isInView = useInView(ref);

    const { cake: data } = cake;
    const { name, description, imageUrl, rating, id } = data;

    const handleClick = () => navigate(paths.CAKE.replace(":id", id.toString()));

    return (
        <motion.div
            className="w-full md:w-4/5 hover:cursor-pointer"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: isInView ? 0.4 : 1 }}
            onClick={handleClick}
            ref={ref}
        >
            <article className="w-full bg-primary rounded p-8 flex items-center lg:items-start flex-col lg:flex-row">
                <img src={imageUrl} className="rounded w-[280px] mb-5 lg:mb-0 mt-4 lg:mt-0" alt={name} />

                <div className="pl-0 lg:pl-5 w-full flex flex-col justify-between">
                    <div className="w-full flex flex-col items-center mb-6 lg:mb-0 h-auto lg:h-[280px]">
                        <h4 className="font-semibold text-secondary text-4xl mb-2 text-center">{name}</h4>
                        <p className="text-md lg:text-lg h-[100px] lg:h-[110px] overflow-hidden text-justify">{description}</p>
                        <span className="text-2xl">...</span>
                    </div>

                    <div className="flex flex-col gap-y-5 lg:gap-y-3 items-center lg:items-end">
                        <RatingStars value={rating.average} ratings={rating.quantity} />
                    </div>
                </div>
            </article>
        </motion.div>
    );
};

export default CakeDayCard;
