import { useMemo, useState } from "react";

import AuthContext from "./AuthContext";
import api from "../../services/api";

import { AuthContextType, AuthCredentials, AuthProviderProps } from "../../interfaces/auth";

const AuthProvider = ({ children }: AuthProviderProps) => {
    const APP_CACHE_KEY = "CAKENVIEW_AUTH_TOKEN";
    const [token, setToken] = useState<string>(localStorage.getItem(APP_CACHE_KEY) || "");

    const isAuthenticated = useMemo(() => token !== "", [token]);

    const login = async (credentials: AuthCredentials): Promise<boolean> => {
        const { token } = await api.login(credentials);

        setToken(token);
        localStorage.setItem(APP_CACHE_KEY, token);

        return !!token;
    };

    const contextValues: AuthContextType = {
        login,
        isAuthenticated
    };

    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
