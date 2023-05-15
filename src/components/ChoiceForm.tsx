import React, { useId, useState } from "react";
import {
    updateScore,
    setChoices,
    progressIncrement,
    resetGame,
} from "../app/gameSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissor.png";
import { CHOICE } from "../types";

export default function ChoiceForm() {
    const id = useId();
    const dispatch = useAppDispatch();
    const { progress } = useAppSelector((state) => state.game);
    const [userChoice, setUserChoice] = useState<CHOICE | null>(null);

    const updateChoice = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserChoice(e.target.value as CHOICE);
    };
    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userChoice) return;
        const choices = [CHOICE.PAPER, CHOICE.ROCK, CHOICE.SCISSORS];
        // get random choice
        const random = choices[Math.floor(Math.random() * choices.length)];

        // set players choices to preview in score component
        dispatch(setChoices({ user: userChoice, bot: random }));

        // game logic
        if (userChoice === CHOICE.ROCK && random === CHOICE.SCISSORS) {
            // user win
            // user is rock && bot is scissors
            dispatch(updateScore({ user: 1, bot: 0 }));
        } else if (userChoice === CHOICE.ROCK && random === CHOICE.PAPER) {
            // user lose
            // user is rock && bot is paper
            dispatch(updateScore({ user: 0, bot: 1 }));
        } else if (userChoice === CHOICE.SCISSORS && random === CHOICE.PAPER) {
            // user win
            // user is scissors && bot is paper
            dispatch(updateScore({ user: 1, bot: 0 }));
        } else if (userChoice === CHOICE.SCISSORS && random === CHOICE.ROCK) {
            // user lose
            // user is scissors && bot is rock
            dispatch(updateScore({ user: 0, bot: 1 }));
        } else if (userChoice === CHOICE.PAPER && random === CHOICE.ROCK) {
            // user win
            // user is paper && bot is rock
            dispatch(updateScore({ user: 1, bot: 0 }));
        } else if (userChoice === CHOICE.PAPER && random === CHOICE.SCISSORS) {
            // user lose
            // user is paper && bot is scissors
            dispatch(updateScore({ user: 0, bot: 1 }));
        } else {
            // draw
        }
        // reset user choice
        setUserChoice(null);
        // increase game progress
        dispatch(progressIncrement());
    };
    const handleReset = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        // reset game
        dispatch(resetGame());
    };
    return (
        <form
            onReset={handleReset}
            onSubmit={handleSubmit}
            className="w-full flex flex-col"
        >
            {progress < 10 && (
                <div className="flex items-center justify-evenly mb-8">
                    <div>
                        <input
                            id={id + "rock"}
                            type="radio"
                            className="hidden peer/rock"
                            value="rock"
                            onChange={updateChoice}
                            name="choice"
                            checked={userChoice === "rock"}
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
                            checked={userChoice === "paper"}
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
                            checked={userChoice === "scissors"}
                        />
                        <label
                            htmlFor={id + "scissors"}
                            className="p-5 grid place-content-center bg-white rounded-full cursor-pointer peer-checked/scissor:bg-green-300 transition-colors duration-300 ease-in-out"
                        >
                            <img src={scissors} className="h-12 -rotate-90" />
                        </label>
                    </div>
                </div>
            )}
            {progress < 10 && (
                <button
                    type="submit"
                    disabled={!userChoice}
                    className="mx-auto px-20 py-2 bg-violet-400 text-violet-100 text-lg font-medium rounded-md disabled:bg-gray-500 transition-colors duration-150 ease-in-out"
                >
                    Play
                </button>
            )}
            {progress === 10 && (
                <button
                    type="reset"
                    className="mx-auto px-20 py-2 bg-indigo-500 text-violet-100 text-lg font-medium rounded-md disabled:bg-gray-500 transition-colors duration-150 ease-in-out"
                >
                    Start new game
                </button>
            )}
        </form>
    );
}
