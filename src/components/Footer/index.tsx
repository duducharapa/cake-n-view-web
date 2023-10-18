const Footer = () => {
    return (
        <footer className="bg-primaryDark w-full text-white">
            <div className="container mx-auto pt-10 pb-5 flex flex-col items-center">
                <h6 className="text-center text-3xl font-autour">Cake 'n View</h6>

                <nav className="mt-2 mb-10 w-full flex justify-center gap-x-10">
                    <a href="/cakes" className="hover:underline">Bolos e tortas</a>
                    <a href="/ratings" className="hover:underline">Avaliações</a>
                    <a href="/about" className="hover:underline">Sobre mim</a>
                </nav>

                <p className="text-sm">Made by Eduardo Charapa. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
