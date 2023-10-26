import { ChangeEvent } from "react";

type EmailInputProps = {
    email: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
};

export type {
    EmailInputProps
};
