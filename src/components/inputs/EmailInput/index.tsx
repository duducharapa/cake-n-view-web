import { BiSolidUser } from "react-icons/bi";

import { EmailInputProps } from "./props";
import { useMemo, useState } from "react";

const EmailInput = ({ email, onChange, error }: EmailInputProps) => {
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
            <label htmlFor="email" className={`${textStyle}`}>Email</label>
            <div className={`w-full border-2 flex flex-row items-center rounded py-2 pr-3 ${borderStyle} ${textStyle}`}>
                <span className="mx-3">
                    <BiSolidUser size="26" />
                </span>
                <input
                    type="email" id="email" placeholder="Seu melhor email"
                    value={email} onChange={onChange} onFocus={handleFocus} onBlur={handleBlur}
                    className="bg-white w-full placeholder:text-gray outline-none"
                />
            </div>
        </>
    );
};

export default EmailInput;
