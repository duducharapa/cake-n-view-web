interface PaginationNavProps {
    total: number;
    actual: number;
    onPageChange: (page: number) => void;
}

export type {
    PaginationNavProps
};
