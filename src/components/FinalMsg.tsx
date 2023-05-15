import { useAppSelector } from "../app/hooks";

export default function FinalMsg() {
    const { progress, user, bot } = useAppSelector((state) => state.game);
    if (progress !== 10) return null;
    return (
        <div className="text-3xl text-center mb-4">
            {user.score > bot.score
                ? "Congratulations you win"
                : user.score < bot.score
                ? "Sorry you lose"
                : "Draw"}
        </div>
    );
}
