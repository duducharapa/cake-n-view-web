import paths from "../../routes/paths";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="w-full h-[196px] bg-primary color-white font-autour flex items-center justify-center">
            <a href={paths.CAKES} className="navbar-link relative after:bg-white">Bolos e tortas</a>
            <a className="mx-12 text-4xl navbar-link relative after:bg-white" href={paths.LANDING}>
                <h1>Cake 'n View</h1>
            </a>
            <a href={paths.RATINGS} className="navbar-link relative after:bg-white">Avaliações</a>
        </nav>
    );
};

export default Navbar;
