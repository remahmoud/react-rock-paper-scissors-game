import ChoiceForm from "./components/ChoiceForm";
import FinalMsg from "./components/FinalMsg";
import ProgressBar from "./components/ProgressBar";
import Score from "./components/Score";

export default function App() {
    return (
        <div className="container mx-auto px-28 h-screen grid place-content-center">
            <h1 className="text-6xl font-bold mb-8">Rock, Paper, Scissors</h1>
            <FinalMsg />
            <ProgressBar />
            <Score />
            <ChoiceForm />
        </div>
    );
}
