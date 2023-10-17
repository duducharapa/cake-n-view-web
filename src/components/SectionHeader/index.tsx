import { SectionHeaderProps } from "./props";

const SectionHeader = ({ title, subtitle, mode = "primary" }: SectionHeaderProps) => {
    const titleColor = `text-${mode == "primary" ? "white" : "primary"}`;
    const subtitleColor = `text-${mode == "primary" ? "primaryDark" : "gray"}`;

    return (
        <header className="flex flex-col gap-y-4 items-center justify-center mb-20 text-primaryDark">
            <h2 className={`text-5xl font-autour font-bold ${titleColor}`}>{title}</h2>
            <p className={`text-xl ${subtitleColor}`}>{subtitle}</p>
        </header>
    );
};

export default SectionHeader;
