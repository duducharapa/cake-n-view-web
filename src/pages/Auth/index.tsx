import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSolidLockAlt, BiSolidUser } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { useAuth } from "../../hooks/auth";
import { AuthCredentials } from "../../interfaces/auth";
import paths from "../../routes/paths";

const Auth = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [visible, setVisible] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const toggleVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setVisible(!visible);
    };

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, id } = e.currentTarget;
        setError(false);

        if (id === "email") setEmail(value);
        if (id === "password") setPassword(value);
    };

    const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        const credentials: AuthCredentials = { email, password };

        try {
            const successfull = await login(credentials);
            if (successfull) navigate(paths.LANDING);
            else setError(true);
        } catch (ex) {
            setError(true);
        }
    };

    return (
        <div className="bg-primary w-[100vw] min-h-[100vh] flex items-center justify-center">
            <form className="w-5/6 lg:w-3/6 bg-white rounded p-8 flex flex-col items-center gap-y-3" onSubmit={submitLogin}>
                <div className="mt-3 mb-5 flex flex-col items-center gap-y-2">
                    <h1 className="text-primary text-3xl md:text-4xl font-autour">Cake n' View</h1>
                    <h2 className="text-gray text-2xl md:text-3xl">Entrar</h2>
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <label htmlFor="email">Email</label>
                    <div className="w-full border-2 border-gray flex flex-row items-center rounded py-2 pr-3">
                        <span className="mx-3">
                            <BiSolidUser size="26" />
                        </span>
                        <input
                            type="email" id="email" placeholder="Seu melhor email"
                            value={email}
                            className="bg-white w-full placeholder:text-gray outline-none"
                            onChange={changeValue}
                        />
                    </div>
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <label htmlFor="password">Senha</label>
                    <div className="w-full border-2 border-gray flex flex-row items-center rounded py-2">
                        <span className="mx-3">
                            <BiSolidLockAlt size="26" />
                        </span>
                        <input
                            type={visible ? "text" : "password"} id="password" placeholder="Sua melhor senha"
                            value={password}
                            className="bg-white w-full placeholder:text-gray outline-none"
                            onChange={changeValue}
                        />
                        <button className="mx-3" onClick={toggleVisibility}>
                            {
                                visible ? <AiFillEyeInvisible size="26" /> : <AiFillEye size="26" />
                            }
                        </button>
                    </div>
                </div>

                {
                    error && <div className="w-full md:w-4/5 text-error">
                        <p>Nome ou credenciais inválidas</p>
                    </div>
                }

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
