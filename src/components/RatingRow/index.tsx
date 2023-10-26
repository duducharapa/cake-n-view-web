import RatingStars from "../RatingStars";
import { RatingRowProps } from "./props";
import profileIcon from "../../assets/profile.svg";

const RatingRow = ({ rating }: RatingRowProps) => {
    const { number, comment } = rating;

    const commentColor = `text-${comment ? "black" : "gray"}`;

    return (
        <article className="w-full rounded bg-white flex flex-col md:flex-row items-center md:items-start p-5">
            <img src={profileIcon} className="w-[84px] h-[84px] rounded" />
            <div className="ml-0 md:ml-5 flex flex-col gap-y-2">
                <h4 className="text-black text-xl font-semibold text-center md:text-justify">Ernesta patifaria</h4>
                <RatingStars value={number} noCounter variant="secondary" />
                <p className={`mt-2 text-justify ${commentColor}`}>{comment || "(sem comentário)"}</p>
            </div>
        </article>
    );
};

export default RatingRow;
