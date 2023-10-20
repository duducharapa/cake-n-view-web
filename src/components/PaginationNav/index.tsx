import NavButton from "./NavButton";
import { PaginationNavProps } from "./props";

const PaginationNav = ({ actual, total, onPageChange }: PaginationNavProps) => {

    const renderButtons = (): JSX.Element[] => {
        const sequence = [ ...Array(total).keys() ];

        return sequence.map(num =>
            <NavButton
                page={num + 1}
                selected={num == actual}
                key={num}
                onClick={() => onPageChange(num)}
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
