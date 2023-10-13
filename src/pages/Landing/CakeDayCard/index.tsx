import carrotCake from "../../../assets/carrot-cake.jpg";

const CakeDayCard = () => {
    return (
        <article className="w-3/5 bg-primaryDark rounded p-8 flex flex-row">
            <img src={carrotCake} className="rounded w-[300px]" alt="Bolo de cenoura" />

            <div className="pl-5 h-[300px] w-full flex flex-col justify-between">
                <div>
                    <h4 className="font-semibold text-secondary text-4xl mb-2">Bolo de cenoura</h4>
                    <p className="text-lg">Aqui vem todo o texto</p>
                </div>

                <a href="/" className="w-full h-[56px] bg-primary rounded flex items-center justify-center">
                    <span className="text-xl font-semibold">Quero mais sobre</span>
                </a>
            </div>
        </article>
    );
};

export default CakeDayCard;
