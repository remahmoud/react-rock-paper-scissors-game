import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CHOICE, GameState, RESULT } from "../types";

const initialState: GameState = {
    user: {
        score: 0,
        choice: null,
    },
    bot: {
        score: 0,
        choice: null,
    },
    progress: 0,
    choiceStatus: null,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        updateScore: (
            state,
            action: PayloadAction<{ user: number; bot: number }>
        ) => {
            state.bot = {
                ...state.bot,
                score: state.bot.score + action.payload.bot,
            };
            state.user = {
                ...state.user,
                score: state.user.score + action.payload.user,
            };
        },
        updateStatus: (state, action: PayloadAction<RESULT>) => {
            state.choiceStatus = action.payload;
        },
        setChoices: (
            state,
            action: PayloadAction<{ user: CHOICE; bot: CHOICE }>
        ) => {
            state.bot = {
                ...state.bot,
                choice: action.payload.bot,
            };
            state.user = {
                ...state.user,
                choice: action.payload.user,
            };
        },
        progressIncrement: (state) => {
            state.progress += 1;
        },
        resetGame: () => {
            return {
                ...initialState,
            };
        },
    },
});

export const {
    updateScore,
    updateStatus,
    setChoices,
    progressIncrement,
    resetGame,
} = gameSlice.actions;

export default gameSlice.reducer;
