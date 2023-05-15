export enum CHOICE {
    PAPER = "paper",
    SCISSORS = "scissors",
    ROCK = "rock",
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
}
