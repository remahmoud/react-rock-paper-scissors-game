export enum CHOICE {
    PAPER = "paper",
    SCISSORS = "scissors",
    ROCK = "rock",
}
export enum RESULT {
    WIN = "win",
    LOSE = "lose",
    DRAW = "draw",
}
export interface GameState {
    user: {
        score: number;
        choice: CHOICE | null;
    };
    bot: {
        score: number;
        choice: CHOICE | null;
    };
    progress: number;
    choiceStatus: RESULT | null;
}
