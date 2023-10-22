import { useNavigate } from "react-router-dom";

import LinkProps from "./props";

const Link = ({ text, to }: LinkProps) => {
    const navigate = useNavigate();

    return (
        <button
            className="navbar-link relative after:bg-white hidden lg:block"
            onClick={() => navigate(to)}
        >
            {text}
        </button>
    );
};

export default Link;
