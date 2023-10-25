import { ReactNode } from "react";

type AuthCredentials = {
    email: string
    password: string
}

type AuthResponse = {
    token: string
}

type AuthContextType = {
    login: (credentials: AuthCredentials) => Promise<boolean>
    isAuthenticated: boolean
    authToken: string
}

interface AuthProviderProps {
    children: ReactNode
}

export type {
    AuthCredentials,
    AuthResponse,
    AuthContextType,
    AuthProviderProps
};
