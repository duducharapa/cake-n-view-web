import { useNavigate } from "react-router-dom";
import paths from "../../routes/paths";

import Link from "./Link";
import profile from "../../assets/profile.svg";
import "./navbar.css";

import { useAuth } from "../../hooks/auth";

const Navbar = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="w-full bg-primary">
            <nav className="container mx-auto h-[128px] lg:h-[144px] color-white flex items-center justify-between px-10 lg:px-0">
                <div className="w-full flex flex-row gap-x-10 font-autour">
                    <button
                        className="text-2xl md:text-3xl navbar-link relative after:bg-white"
                        onClick={() => navigate(paths.LANDING)}
                    >
                        <h1>Cake 'n View</h1>
                    </button>
                    <Link text="Bolos e tortas" to={paths.CAKES} />

                    <Link text="Avaliações" to={paths.RATINGS} />
                </div>

                {
                    isAuthenticated ?
                        <img src={profile} className="w-[56px]" /> :
                        <button
                            className="bg-primaryDark hover:bg-primaryDarker duration-300 w-[128px] h-[48px] rounded"
                            onClick={() => navigate(paths.AUTH)}
                        >
                            <span className="text-white font-semibold">Entrar</span>
                        </button>
                }
            </nav>
        </div>
    );
};

export default Navbar;
