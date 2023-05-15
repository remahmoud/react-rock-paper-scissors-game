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
    score: number;
    choice: CHOICE | null;
}
