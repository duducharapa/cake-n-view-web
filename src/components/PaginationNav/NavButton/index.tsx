import { motion } from "framer-motion";
import { NavButtonProps } from "./props";

const NavButton = ({ selected = false, page, onClick }: NavButtonProps) => {
    const themeColor = selected ? "bg-primaryDark text-white" : "bg-white text-black";

    return (
        <motion.div
            onClick={onClick}
            className={`w-[42px] h-[42px] rounded-full flex items-center justify-center ${themeColor}`}
            initial={{
                y: 0
            }}
            whileHover={{
                y: -10,
                cursor: "pointer"
            }}
            transition={{
                duration: 0.4
            }}
        >
            <span className="font-bold">{page}</span>
        </motion.div>
    );
};

export default NavButton;
