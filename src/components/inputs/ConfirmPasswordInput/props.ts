import { ChangeEvent } from "react";

interface ConfirmPasswordInputProps {
    password: string
    current: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export type {
    ConfirmPasswordInputProps
};
