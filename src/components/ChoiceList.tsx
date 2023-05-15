import React, { useId } from "react";
import { setChoice } from "../app/gameSlice";
import { useAppDispatch } from "../app/hooks";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissor.png";
import type { CHOICE } from "../types";

export default function ChoiceList() {
    const id = useId();
    const dispatch = useAppDispatch();

    const updateChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setChoice(e.target.value as CHOICE));
    };
    return (
        <div className="flex items-center justify-evenly">
            <div>
                <input
                    id={id + "rock"}
                    type="radio"
                    className="hidden peer/rock"
                    value="rock"
                    onChange={updateChoice}
                    name="choice"
                />
                <label
                    htmlFor={id + "rock"}
                    className="p-5 grid place-content-center bg-white rounded-full cursor-pointer peer-checked/rock:bg-green-300 transition-colors duration-300 ease-in-out"
                >
                    <img src={rock} className="h-12" />
                </label>
            </div>
            <div>
                <input
                    id={id + "paper"}
                    type="radio"
                    className="hidden peer/paper"
                    value="paper"
                    onChange={updateChoice}
                    name="choice"
                />
                <label
                    htmlFor={id + "paper"}
                    className="p-5 grid place-content-center bg-white rounded-full cursor-pointer peer-checked/paper:bg-green-300 transition-colors duration-300 ease-in-out"
                >
                    <img src={paper} className="h-12" />
                </label>
            </div>
            <div>
                <input
                    id={id + "scissors"}
                    type="radio"
                    className="hidden peer/scissor"
                    value="scissors"
                    onChange={updateChoice}
                    name="choice"
                />
                <label
                    htmlFor={id + "scissors"}
                    className="p-5 grid place-content-center bg-white rounded-full cursor-pointer peer-checked/scissor:bg-green-300 transition-colors duration-300 ease-in-out"
                >
                    <img src={scissors} className="h-12 -rotate-90" />
                </label>
            </div>
        </div>
    );
}
