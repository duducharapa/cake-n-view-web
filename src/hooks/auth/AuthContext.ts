import { createContext } from "react";
import { AuthContextType } from "../../interfaces/auth";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
