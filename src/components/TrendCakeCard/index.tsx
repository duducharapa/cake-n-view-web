import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { TrendCakeCardProps } from "./props";
import paths from "../../routes/paths";

const TrendCakeCard = ({ cake, animation }: TrendCakeCardProps) => {
    const navigate = useNavigate();
    const { name, imageUrl, description, id } = cake;

    const handleClick = () => navigate(paths.CAKE.replace(":id", id.toString()));

    return (
        <motion.div
            className="w-3/5"
            initial={{ x: animation === "left" ? -200 : 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                duration: 1
            }}
            viewport={{ once: true }}
        >
            <article className="w-full rounded bg-white border-primary p-8">
                <h4 className="text-primary text-center text-3xl font-bold mb-5">{name}</h4>

                <div className="w-full flex flex-row h-[200px]">
                    <img src={imageUrl} alt="Bolo de morango com creme" className="rounded w-[200px]" />

                    <div className="flex ml-5 flex-col h-full w-full justify-between">
                        <p className="text-black text-md">{description}</p>

                        <button
                            className="w-[180px] h-[64px] bg-primary hover:bg-primaryDark duration-300 rounded flex items-center justify-center shadow-[2px_4px_4px_0px_rgba(0,0,0,0.4)] self-end"
                            onClick={handleClick}
                        >
                            <span className="text-white font-semibold text-xl">Ver mais</span>
                        </button>
                    </div>
                </div>
            </article>
        </motion.div>
    );
};

export default TrendCakeCard;
