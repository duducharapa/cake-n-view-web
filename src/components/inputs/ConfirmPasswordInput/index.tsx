import { useMemo, useState } from "react";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { ConfirmPasswordInputProps } from "./props";

const ConfirmPasswordInput = ({ password, onChange, error, current }: ConfirmPasswordInputProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);

    const passwordsMatch = useMemo(() => {
        if (password === "") return true;

        return current === password;
    }, [password, current]);

    const borderStyle = useMemo(() => {
        if (error) return "border-error";

        return focus ? "border-primary" : "border-gray";
    }, [focus, error]);

    const textStyle = useMemo(() => {
        if (error) return "text-error";

        return focus ? "text-primary" : "text-gray";
    }, [focus, error]);

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    const toggleVisibility = () => setVisible(!visible);

    return (
        <>
            <label htmlFor="password" className={`${textStyle}`}>Confirmar senha</label>
            <div className={`w-full border-2 flex flex-row items-center rounded py-2 ${borderStyle} ${textStyle}`}>
                <span className="mx-3">
                    <BiSolidLockAlt size="26" />
                </span>
                <input
                    type={visible ? "text" : "password"} id="confirm-password" placeholder="Confirme sua senha"
                    value={current} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur}
                    className="bg-white w-full placeholder:text-gray outline-none"
                />
                <button
                    type="button" className="mx-3"
                    onClick={toggleVisibility} onFocus={handleFocus} onBlur={handleBlur}
                >
                    {
                        visible ? <AiFillEyeInvisible size="26" /> : <AiFillEye size="26" />
                    }
                </button>
            </div>
            {
                !passwordsMatch && <span className="text-error">As senhas não coincidem</span>
            }
        </>
    );
};

export default ConfirmPasswordInput;
