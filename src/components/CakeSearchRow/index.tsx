import { motion } from "framer-motion";

import RatingStars from "../RatingStars";
import { CakeSearchRowProps } from "./props";
import { useNavigate } from "react-router-dom";
import paths from "../../routes/paths";

const CakeSearchRow = ({ cake }: CakeSearchRowProps) => {
    const navigate = useNavigate();
    const { name, imageUrl, rating, description, id } = cake;

    const handleClick = () => {
        navigate(paths.CAKE.replace(":id", id.toString()));
    };

    return (
        <motion.div
            className="w-full md:w-4/5"
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
            onClick={handleClick}
        >
            <article className="w-full rounded flex flex-col lg:flex-row bg-white p-8 items-center lg:items-start">
                <img src={imageUrl} alt={name} className="w-[128px] h-[128px] rounded mb-2 lg:mb-0" />
                <div className="ml-0 lg:ml-5 h-full flex flex-col justify-between gap-y-5">
                    <div className="w-full flex items-center lg:items-start flex-col gap-y-2">
                        <h4 className="text-primary font-semibold text-2xl text-center">{name}</h4>
                        <RatingStars ratings={rating.quantity} value={rating.average} variant="secondary" />
                    </div>

                    <p className="text-black h-[72px] lg:h-[46px] overflow-hidden text-justify">{description}</p>
                </div>
            </article>
        </motion.div>
    );
};

export default CakeSearchRow;
