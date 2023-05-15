import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissors from "../assets/scissor.png";
import { CHOICE } from "../types";

const variants = {
    yellow: "bg-yellow-500",
    red: "bg-red-400",
};

type Props = {
    type: CHOICE;
    variant?: keyof typeof variants;
};

export default function ChoiceItem({ type, variant = "red" }: Props) {
    const variantStyle = variants[variant];
    if (type === "rock") {
        return (
            <div className={`icon ${variantStyle}`}>
                <img src={rock} className="h-12" />
            </div>
        );
    }
    if (type === "paper") {
        return (
            <div className={`icon ${variantStyle}`}>
                <img src={paper} className="h-12" />
            </div>
        );
    }
    if (type === "scissors") {
        return (
            <div className={`icon ${variantStyle}`}>
                <img src={scissors} className="h-12 -rotate-90" />
            </div>
        );
    }
    return null;
}
