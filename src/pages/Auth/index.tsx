import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAuth } from "../../hooks/auth";
import { AuthCredentials } from "../../interfaces/auth";
import paths from "../../routes/paths";
import BackButton from "../../components/BackButton";
import EmailInput from "../../components/inputs/EmailInput";
import PasswordInput from "../../components/inputs/PasswordInput";

const Auth = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [error, setError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, id } = e.currentTarget;
        setError(false);

        if (id === "email") setEmail(value);
        if (id === "password") setPassword(value);
    };

    const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        const credentials: AuthCredentials = { email, password };

        e.preventDefault();
        setError(false);

        try {
            const successfull = await login(credentials);

            if (successfull) {
                navigate(paths.LANDING);
            } else {
                setError(true);
                toast.error("Email e/ou senha inválidos");
            }
        } catch (ex) {
            setError(true);
            toast.error("Email e/ou senha inválidos");
        }
    };

    return (
        <div className="bg-primary w-[100vw] min-h-[100vh] flex items-center justify-center">
            <form className="w-5/6 lg:w-3/6 bg-white rounded p-8 flex flex-col items-center gap-y-3" onSubmit={submitLogin}>
                <div className="w-full md:w-4/5">
                    <BackButton />
                </div>

                <div className="mt-3 mb-5 flex flex-col items-center gap-y-2">
                    <h1 className="text-primary text-3xl md:text-4xl font-autour">Cake n' View</h1>
                    <h2 className="text-gray text-2xl md:text-3xl">Entrar</h2>
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <EmailInput email={email} onChange={changeValue} error={error} />
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <PasswordInput password={password} onChange={changeValue} error={error} />
                </div>

                <div className="w-full md:w-4/5 flex justify-end my-3">
                    <button
                        type="submit"
                        className="bg-primary rounded w-full md:w-[168px] flex items-center justify-center h-[56px] hover:bg-primaryDark duration-300"
                    >
                        <span className="text-white text-lg font-semibold">Entrar</span>
                    </button>
                </div>

                <div className="w-4/5 flex justify-center">
                    <button
                        className="text-black hover:underline duration-300 text-lg"
                        onClick={() => navigate(paths.SIGNUP)}
                    >
                        <span>
                            Não possui uma conta?
                            <strong className="text-primary"> Cadastre-se</strong>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;
