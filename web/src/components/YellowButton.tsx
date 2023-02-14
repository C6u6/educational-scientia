import { Link } from "react-router-dom";

interface Props {
    url: string,
    text: string,
    textSize?: number,
    buttonWidth?: number,
    buttonHeight?: number,
};
export function YellowButton({url, text, textSize = 20, buttonWidth = 370, buttonHeight = 56}:Props) {
    return (
        <Link to={`${url}`}
         className={`text-Brown justify-center`}
        >
            <button
             style={{width: buttonWidth, height: buttonHeight}}
             className={`bg-Yellow rounded-lg border-none shadow-lg text-[${textSize}px] hover:mt-[-16px] hover:shadow-yellow-100 transition-all`}
            >
                {text}
            </button>
        </Link>
    );
};