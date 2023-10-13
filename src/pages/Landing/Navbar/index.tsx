import paths from "../../../routes/path";

const Navbar = () => {
    return (
        <nav className="w-full h-[196px] bg-primary color-white font-autour flex items-center justify-center">
            <a href={paths.CAKES}>Bolos e tortas</a>
            <a className="mx-12 text-4xl" href={paths.LANDING}>
                <h1>Cake 'n View</h1>
            </a>
            <a href={paths.RATINGS}>Avaliações</a>
        </nav>
    );
};

export default Navbar;
