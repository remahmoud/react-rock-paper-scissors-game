import { useAppSelector } from "../app/hooks";

export default function ProgressBar() {
    const progress = useAppSelector((state) => state.game.progress);
    if (progress > 10) return null;
    return (
        <div className="bg-indigo-200 mb-4 rounded-full">
            <div
                style={{ width: `${Math.floor((progress / 10) * 100)}%` }}
                className="h-4 bg-indigo-500 rounded-xl w-1/2 transition-all duration-500 ease-in-out"
            />
        </div>
    );
}
