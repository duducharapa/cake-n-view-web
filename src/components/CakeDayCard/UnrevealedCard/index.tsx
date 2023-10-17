import { motion, useAnimate } from "framer-motion";

const UnrevealedCard = () => {
    const [scope, animate] = useAnimate();

    const handleClick = async () => {
        await animate(scope.current, {
            opacity: 0
        }, {
            duration: 2,
            ease: "linear"
        });
    };

    return (
        <motion.div
            className="w-3/5 absolute overflow-hidden"
            ref={scope}
            onTap={handleClick}
        >
            <div className="w-full bg-black rounded p-8 flex items-center justify-center hover:cursor-pointer">
                <div className="h-[280px] flex items-center justify-center">
                    <p className="font-bold text-xl">Clique para revelar</p>
                </div>
            </div>
        </motion.div>
    );
};

export default UnrevealedCard;
