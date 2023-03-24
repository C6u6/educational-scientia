import { useEffect, useState } from "react";

interface Props {
    time: number,
    questionsQuantity: number, 
    questionBeenApplied: number,
    nextQuestionStateFunction: React.Dispatch<React.SetStateAction<number>>,
}

export function CountDownTimer(props: Props) {
    const [currentTime, setTime] = useState(props.time);

    const QuestionBeenAppliedNow = props.questionBeenApplied;
    console.log('The page is at the ' + QuestionBeenAppliedNow + 'th question')

    function regressTime(time: number, questionBeenAnswered: number, quantityOfQuestion: number) {
        console.log('segundo: ' + time)
        console.log('questionbeen: ' + questionBeenAnswered)
        if (questionBeenAnswered == quantityOfQuestion) return;
        setTimeout(() => {
            if (questionBeenAnswered !== QuestionBeenAppliedNow) {
                return;
            }
            if (time == 0) {
                props.nextQuestionStateFunction(questionBeenAnswered + 1);
            };
            if (time > 0) {
                setTime(time - 1);
                regressTime(time - 1, questionBeenAnswered, quantityOfQuestion);
            };
        }, 1000);
    };

    useEffect(() => {
        regressTime(props.time, props.questionBeenApplied, props.questionsQuantity);
    }, [props.questionBeenApplied]);

    return (
        <div
         className="bg-LightBlue-500 text-white w-fit rounded-[50%] p-2 text-lg my-auto"
        >
            {currentTime}
        </div>
    );
};