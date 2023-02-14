import { useState } from "react";
import { Question, QuestionSheetApplied } from "../pages/QuestionSheetApplied";
import { AnalysingAQuestionSet } from "./AnalysingAQuestionSet";
import { BackButton } from "./BackButton";

interface Props {
    title: string,
    shortPharagraph: string,
    dataToGenerateAnotherQuestionSet?: Question
};

export function PopoverCard({title, shortPharagraph, dataToGenerateAnotherQuestionSet}:Props) {

    const [buttonClicked, setButtonClicked] = useState('');

    function handleClickRepeat() {
        setButtonClicked(() => {
            return 'repeat';
        })
    };

    function handleClickAnalyse() {
        setButtonClicked(() => {
            return 'analyse';
        })
    };

    return (
        <>
            {
                buttonClicked == "analyse" ? <AnalysingAQuestionSet total={10} right={4} wrong={5} passed={1}/> : null
            }

            {
                buttonClicked == "repeat" ? <QuestionSheetApplied /* dataToFiltrateQuestions={dataToGenerateAnotherQuestionSet} *//> : null
            }

            {
                buttonClicked === '' ?             <div
                className="rounded-lg bg-Gray text-DarkBlue-500 w-[400px] m-auto"
                >
                    <h1
                    className="mx-auto font-semibold text-xl w-fit my-6 pt-6"
                    >
                        {title}
                    </h1>
                    <p
                    className="mx-auto w-fit my-6"
                    >
                        {shortPharagraph}
                    </p>
                    <div
                    className="flex justify-center gap-6 mt-6 mb-2 pb-6 font-semibold"
                    >
                        <button
                        className={`bg-LightBlue-500 border-[0.8px] border-black text-white w-1/3 rounded-lg`}
                        onClick={handleClickRepeat}
                        >
                            Repetir
                        </button>
                        <button
                        className={`bg-LightBlue-500 border-[0.8px] border-black text-white w-1/3 rounded-lg`}
                        onClick={handleClickAnalyse}
                        >
                            Analisar
                        </button>
                    </div>
                    <div className="w-fit mx-auto">
                        <BackButton ClassName="text-LightBlue-500 font-semibold mx-auto w-fit text-lg hover:cursor-pointer"/>
                    </div>
                </div> : null
            }
        </>

    );

};