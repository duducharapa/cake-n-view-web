import { motion } from "framer-motion";

import RatingStars from "../RatingStars";
import { CakeSearchRowProps } from "./props";

const CakeSearchRow = ({ cake }: CakeSearchRowProps) => {
    const { name, imageUrl, rating, description } = cake;

    return (
        <motion.div
            className="w-3/5"
            transition={{
                duration: 0.4
            }}
            initial={{
                y: 0
            }}
            whileHover={{
                y: -10,
                cursor: "pointer"
            }}
        >
            <article className="w-full rounded flex flex-row bg-white p-4">
                <img src={imageUrl} alt={name} className="w-[128px] h-[128px] rounded" />
                <div className="ml-5 h-full flex flex-col justify-between gap-y-5">
                    <div>
                        <h4 className="text-primary font-semibold text-2xl">{name}</h4>
                        <RatingStars ratings={rating.quantity} value={rating.average} variant="secondary" />
                    </div>

                    <p className="text-black h-[46px] overflow-hidden">{description}</p>
                </div>
            </article>
        </motion.div>
    );
};

export default CakeSearchRow;
