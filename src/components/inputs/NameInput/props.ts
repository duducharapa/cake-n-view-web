import { ChangeEvent } from "react";

interface NameInputProps {
    name: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export type {
    NameInputProps
};
