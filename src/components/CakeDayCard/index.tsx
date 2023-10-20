import { useNavigate } from "react-router-dom";

import { CakeDayCardProps } from "./props";
import UnrevealedCard from "./UnrevealedCard";
import RatingStars from "../RatingStars";
import paths from "../../routes/paths";

const CakeDayCard = ({ cake }: CakeDayCardProps) => {
    const navigate = useNavigate();
    const { cake: data } = cake;
    const { name, description, imageUrl, rating, id } = data;

    const handleClick = () => navigate(paths.CAKE.replace(":id", id.toString()));

    return (
        <>
            <UnrevealedCard />
            <article className="w-3/5 bg-primary rounded p-8 flex flex-row">
                <img src={imageUrl} className="rounded w-[280px]" alt={name} />

                <div className="pl-5 h-[280px] w-full flex flex-col justify-between">
                    <div className="w-full flex flex-col items-center">
                        <h4 className="font-semibold text-secondary text-3xl mb-2">{name}</h4>
                        <p className="text-md h-[100px] overflow-hidden text-justify">{description}</p>
                        <span className="text-2xl">...</span>
                    </div>

                    <div className="flex flex-col gap-y-3 items-end">
                        <RatingStars value={rating.average} ratings={rating.quantity} />

                        <button
                            className="w-full h-[56px] bg-primaryDark rounded flex items-center justify-center hover:bg-primaryDarker duration-300"
                            onClick={handleClick}
                        >
                            <span className="text-xl font-semibold">Quero mais sobre</span>
                        </button>
                    </div>
                </div>
            </article>
        </>
    );
};

export default CakeDayCard;
