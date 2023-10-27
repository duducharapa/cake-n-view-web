import { useMemo, useState } from "react";
import { BiSolidUser } from "react-icons/bi";

import { NameInputProps } from "./props";

const NameInput = ({ name, onChange, error }: NameInputProps) => {
    const [focus, setFocus] = useState<boolean>(false);

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

    return (
        <>
            <label htmlFor="name" className={`${textStyle}`}>Nome completo</label>
            <div className={`w-full border-2 flex flex-row items-center rounded py-2 pr-3 ${borderStyle} ${textStyle}`}>
                <span className="mx-3">
                    <BiSolidUser size="26" />
                </span>
                <input
                    type="text" id="name" placeholder="Seu nome completo"
                    value={name} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur}
                    className="bg-white w-full placeholder:text-gray outline-none"
                />
            </div>
        </>
    );
};

export default NameInput;
