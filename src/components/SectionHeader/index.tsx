import sectionCake from "../../assets/section.png";
import { SectionHeaderProps } from "./props";

const SectionHeader = ({ title }: SectionHeaderProps) => {
    return (
        <header className="flex flex-row gap-x-10 items-center mb-20">
            <div className="bg-primary rounded-full p-4">
                <img src={sectionCake} alt="Badge" className="w-[36px]" />
            </div>
            <h2 className="text-4xl text-primary font-bold">{title}</h2>
        </header>
    );
};

export default SectionHeader;
