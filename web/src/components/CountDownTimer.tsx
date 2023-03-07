import { useEffect, useState } from "react";

interface Props {
    time: number,
    questionBeenApplied: number,
    nextQuestionStateFunction: React.Dispatch<React.SetStateAction<number>>,
}

export function CountDownTimer(props: Props) {
    const [currentTime, setTime] = useState(props.time);

    function a(time: number) {
        /* console.log(currentTime);
        setTime(time - 1);
        setTimeout(() => {
            if (time > 0) {
                a(time - 1);
            };
        }, 1000); */
    };

    useEffect(() => {
        a(currentTime);
    }, []);

    return (
        <div
         className="bg-LightBlue-500 text-white w-fit rounded-[50%] p-2 text-lg my-auto"
        >
            {currentTime}
        </div>
    );
};