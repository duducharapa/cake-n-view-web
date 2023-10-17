import { TrendCakeCardProps } from "./props";

const TrendCakeCard = ({ cake }: TrendCakeCardProps) => {
    const { name, imageUrl, description } = cake;

    return (
        <article className="w-3/5 rounded bg-white border-primary p-8">
            <h4 className="text-primary text-center text-3xl font-bold mb-5">{name}</h4>

            <div className="w-full flex flex-row h-[200px]">
                <img src={imageUrl} alt="Bolo de morango com creme" className="rounded w-[200px]" />

                <div className="flex ml-5 flex-col h-full w-full justify-between">
                    <p className="text-black text-md">{description}</p>

                    <a href="/" className="w-[180px] h-[64px] bg-primary hover:bg-primaryDark duration-300 rounded flex items-center justify-center shadow-[2px_4px_4px_0px_rgba(0,0,0,0.4)] self-end">
                        <p className="text-white font-semibold text-xl">Ver mais</p>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default TrendCakeCard;
