import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

import BackButton from "../../components/BackButton";
import EmailInput from "../../components/inputs/EmailInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import NameInput from "../../components/inputs/NameInput";
import ConfirmPasswordInput from "../../components/inputs/ConfirmPasswordInput";
import { RegisterUserBody } from "../../interfaces/user";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import paths from "../../routes/paths";

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [error, setError] = useState<boolean>(false);

    const submitSignup = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body: RegisterUserBody = {
            email, name, password
        };

        const created = await api.registerUser(body);

        if (created) {
            toast.success("Usuário cadastrado com sucesso!");
            navigate(paths.AUTH);
        } else {
            toast.error("O email inserido já está cadastrado!");
        }
    };

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        setError(false);

        if (id === "password") setPassword(value);
        if (id === "email") setEmail(value);
        if (id === "name") setName(value);
        if (id === "confirm-password") setConfirmPassword(value);
    };

    return (
        <div className="bg-primary w-full min-h-[100vh] flex items-center justify-center">
            <form className="w-5/6 lg:w-3/6 bg-white rounded p-8 flex flex-col items-center gap-y-3 my-10 lg:my-20" onSubmit={submitSignup}>
                <div className="w-full md:w-4/5">
                    <BackButton />
                </div>

                <div className="mt-3 mb-5 flex flex-col items-center gap-y-2">
                    <h1 className="text-primary text-3xl md:text-4xl font-autour">Cake n' View</h1>
                    <h2 className="text-gray text-2xl md:text-3xl">Cadastrar</h2>
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <NameInput name={name} onChange={changeValue} error={error} />
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <EmailInput email={email} onChange={changeValue} error={error} />
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <PasswordInput password={password} onChange={changeValue} error={error} />
                </div>

                <div className="w-full md:w-4/5 text-gray flex flex-col gap-y-1">
                    <ConfirmPasswordInput
                        password={password} current={confirmPassword}
                        onChange={changeValue}
                        error={error}
                    />
                </div>

                <div className="w-full md:w-4/5 flex justify-end my-3">
                    <button
                        type="submit"
                        className="bg-primary rounded w-full md:w-[168px] flex items-center justify-center h-[56px] hover:bg-primaryDark duration-300"
                    >
                        <span className="text-white text-lg font-semibold">Registrar</span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
