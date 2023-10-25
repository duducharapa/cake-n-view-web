import { Cake } from "../../interfaces/cakes";

interface RateCakeModalProps {
    open: boolean
    onClose: () => void
    cake: Cake
}

export type {
    RateCakeModalProps
};
