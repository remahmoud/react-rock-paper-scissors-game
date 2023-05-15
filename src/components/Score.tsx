import { useAppSelector } from "../app/hooks";
import ChoiceItem from "./ChoiceItem";

export default function Score() {
    const { user, bot } = useAppSelector((state) => state.game);
    return (
        <div className="flex gap-4 mb-8">
            <div
                data-user=""
                className="flex flex-col w-1/2 bg-white text-black h-auto p-4 rounded-xl"
            >
                <h3 className="text-center text-3xl font-bold">
                    You: {user.score}
                </h3>
                {user.choice && <ChoiceItem type={user.choice} />}
            </div>
            <div
                data-bot=""
                className="flex flex-col w-1/2 bg-white text-black h-auto p-4 rounded-xl"
            >
                <h3 className="text-center text-3xl font-bold">
                    Bot: {bot.score}
                </h3>
                {bot.choice && (
                    <ChoiceItem type={bot.choice} variant="yellow" />
                )}
            </div>
        </div>
    );
}
