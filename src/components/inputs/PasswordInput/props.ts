import { ChangeEvent } from "react";

type PasswordInputProps = {
    password: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
}

export type {
    PasswordInputProps
};
