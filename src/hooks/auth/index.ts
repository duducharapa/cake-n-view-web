import { useContext } from "react";

import AuthProvider from "./AuthProvider";
import AuthContext from "./AuthContext";
import { AuthContextType } from "../../interfaces/auth";

const useAuth = () => useContext<AuthContextType>(AuthContext);

export {
    AuthProvider,
    useAuth
};
