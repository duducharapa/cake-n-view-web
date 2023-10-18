import NavButton from "./NavButton";
import { PaginationNavProps } from "./props";

const PaginationNav = ({ actual, total, onPageChange }: PaginationNavProps) => {
    /*
        <NavButton />
        <NavButton />
        <span className="text-2xl">...</span>
        <NavButton />
    */
    const renderButtons = (): JSX.Element[] => {
        const sequence = [ ...Array(total).keys() ];

        return sequence.map(num =>
            <NavButton
                page={num + 1}
                selected={num + 1 == actual}
                key={num}
                onClick={() => onPageChange(num + 1)}
            />
        );
    };

    return (
        <nav className="flex flex-row gap-x-2">
            {
                renderButtons()
            }
        </nav>
    );
};

export default PaginationNav;
