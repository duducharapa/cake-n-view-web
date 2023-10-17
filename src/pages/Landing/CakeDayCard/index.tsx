import { useState } from "react";
import { CakeDayCardProps } from "./props";
import UnrevealedCard from "./UnrevealedCard";

const CakeDayCard = ({ cake }: CakeDayCardProps) => {
    const [revealed, setRevealed] = useState<boolean>(false);

    const { cake: data } = cake;
    const { name, description, imageUrl } = data;

    const triggerReveal = () => {
        setRevealed(true);
    };

    return revealed ? (
        <article className="w-3/5 bg-primary rounded p-8 flex flex-row">
            <img src={imageUrl} className="rounded w-[300px]" alt="Bolo de cenoura" />

            <div className="pl-5 h-[300px] w-full flex flex-col justify-between">
                <div>
                    <h4 className="font-semibold text-secondary text-3xl mb-2">{name}</h4>
                    <p className="text-md">{description}</p>
                </div>

                <a href="/" className="w-full h-[56px] bg-primaryDark rounded flex items-center justify-center hover:bg-primaryDarker duration-300">
                    <span className="text-xl font-semibold">Quero mais sobre</span>
                </a>
            </div>
        </article>
    ) : <UnrevealedCard onClick={triggerReveal} />;
};

export default CakeDayCard;
