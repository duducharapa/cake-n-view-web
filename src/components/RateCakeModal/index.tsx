import { useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";
import { BsStarFill } from "react-icons/bs";

import CloseIcon from "./CloseIcon";
import api from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { RateCake } from "../../interfaces/ratings";
import { RateCakeModalProps } from "./props";

const RateCakeModal = ({ open, onClose, cake }: RateCakeModalProps) => {
    const { authToken } = useAuth();
    const { name, id } = cake;

    const [number, setNumber] = useState<number>(5);
    const [comment, setComment] = useState<string>("");

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(parseInt(e.currentTarget.value, 10));
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value);
    };

    const submitCakeRating = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body: RateCake = {
            cakeId: id,
            number,
            comment
        };

        const posted = await api.rateCake(body, authToken);

        if (posted) onClose();
        toast.error("O usuário já avaliou este bolo");
    };

    return (
        <Modal
            open={open} onClose={onClose} center closeIcon={<CloseIcon />}
            styles={{
                modal: {
                    backgroundColor: "#FFE9D6",
                    borderRadius: "4px"
                }
            }}
        >
            <form className="pt-10 pb-5 px-5 w-[50vw] flex flex-col items-center gap-y-5" onSubmit={submitCakeRating}>
                <h4 className="text-primary text-2xl font-autour">{name}</h4>

                <div className="w-full text-primary">
                    <label htmlFor="number">
                        <strong>Nota</strong>
                    </label>
                    <div className="flex flex-row items-center">
                        <BsStarFill size="20" />
                        <span className="ml-2 mr-4">
                            <strong>{number}</strong>
                        </span>
                        <input
                            type="range" min="0" max="5" id="number"
                            className="bg-gray appearance-none h-0.5 rounded outline-none thumb:bg-primary"
                            value={number}
                            onChange={handleNumberChange}
                        />
                    </div>
                </div>

                <div className="w-full text-gray">
                    <label htmlFor="comment">
                        <strong>Comentário </strong>
                        (opcional)
                    </label>
                    <textarea
                        id="comment" value={comment}
                        className="w-full bg-white outline-none rounded p-3 border-gray border-2 placeholder:text-gray"
                        onChange={handleCommentChange}
                    ></textarea>
                </div>

                <button type="submit" className="bg-primary hover:bg-primaryDark duration-300 rounded w-[144px] h-[48px] self-end">
                    <span className="font-semibold">Avaliar</span>
                </button>
            </form>
        </Modal>
    );
};

export default RateCakeModal;
