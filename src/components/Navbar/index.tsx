import { useNavigate } from "react-router-dom";
import paths from "../../routes/paths";

import Link from "./Link";

import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="w-full h-[128px] lg:h-[196px] bg-primary color-white font-autour flex items-center justify-center">
            <Link text="Bolos e tortas" to={paths.CAKES} />
            <button
                className="mx-12 text-3xl md:text-4xl navbar-link relative after:bg-white"
                onClick={() => navigate(paths.LANDING)}
            >
                <h1>Cake 'n View</h1>
            </button>
            <Link text="Avaliações" to={paths.RATINGS} />
        </nav>
    );
};

export default Navbar;
