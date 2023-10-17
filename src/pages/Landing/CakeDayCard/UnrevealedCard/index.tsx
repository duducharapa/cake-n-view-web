import { UnrevealedCardProps } from "./props";

const UnrevealedCard = ({ onClick }: UnrevealedCardProps) => {
    return (
        <div className="w-3/5 bg-black rounded p-8 flex items-center justify-center hover:cursor-pointer" onClick={onClick}>
            <div className="h-[300px] flex items-center justify-center">
                <p className="font-bold text-xl">Clique para revelar</p>
            </div>
        </div>
    );
};

export default UnrevealedCard;
