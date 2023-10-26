import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { BackButtonProps } from "./props";

const BackButton = ({ className = "" }: BackButtonProps) => {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    return (
        <button
            type="button"
            className={`text-primary hover:text-primaryDark duration-300 flex flex-row items-center gap-x-2 text-xl ${className}`}
            onClick={handleBack}
        >
            <FaRegArrowAltCircleLeft size="24" />
            <span className="font-semibold">Voltar</span>
        </button>
    );
};

export default BackButton;
