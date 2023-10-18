import { useAnimate } from "framer-motion";
import { useMemo, useState } from "react";

const UnrevealedCard = () => {
    const [scope, animate] = useAnimate();
    const [complete, setComplete] = useState<boolean>(false);

    const display = useMemo(() => {
        return complete ? "hidden" : "block";
    }, [complete]);

    const handleClick = async () => {
        await animate(scope.current, {
            opacity: 0
        }, {
            duration: 1,
            ease: "linear"
        });

        setComplete(true);
    };

    return (
        <div
            ref={scope}
            onClick={handleClick}
            className={`w-3/5 bg-black rounded p-8 flex items-center justify-center hover:cursor-pointer absolute ${display}`}
        >
            <div className="h-[280px] flex items-center justify-center">
                <p className="font-bold text-xl">Clique para revelar</p>
            </div>
        </div>
    );
};

export default UnrevealedCard;
