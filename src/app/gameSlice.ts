import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { CHOICE, GameState } from "../types";

const initialState: GameState = {
    score: 0,
    choice: null,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setChoice: (state, action: PayloadAction<CHOICE>) => {
            state.choice = action.payload;
        },
    },
});

export const { setChoice } = gameSlice.actions;

export default gameSlice.reducer;
