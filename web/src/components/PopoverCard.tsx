import { useState } from "react";
import { validInputsType } from "../pages/QuestionSheet";
import { QuestionSheetApplied } from "../pages/QuestionSheetApplied";
import { AnalysingAQuestionSet } from "./AnalysingAQuestionSet";
import { BackButton } from "./BackButton";

type PopoverProps = {
    title: string,
    shortPharagraph: string,
    dataToGenerateAnotherQuestionSet: validInputsType,
};

export function PopoverCard({title, shortPharagraph, dataToGenerateAnotherQuestionSet}: PopoverProps) {

    const [buttonClicked, setButtonClicked] = useState('');
    const [newQuestionSet, setNewQuestionSet] = useState<Array< {
        year: number,
        title: string,
        topic: string,
        subject: string,
        imagePath?: string,
        institution: string,
        alternatives: string[],
    }>>([]);

    function handleClickRepeat() {
        setButtonClicked(() => {
            return 'repeat';
        });

        // Fetch questions 
        let query = '?';

        /* dataToFiltrateQuestions.map(el => {
            query += `${fields[el.fieldIndex].charAt(0).toLowerCase() + fields[el.fieldIndex].slice(1)}=${el.input}&`;
        })

        api.get(`question-library?${query}`).then(response => {
            
            setQuestions(() => {return []});
            
            response.data.map((el: { props: { year: number; title: string; topic: string; subject: string; imagePath?: string | undefined; institution: string; alternatives: string[]; }; })  => {
                setQuestions((prevArray) => {
                    return [...prevArray, el.props]
                });
            })
        })
    }; */
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
                buttonClicked == "repeat" ?
                <QuestionSheetApplied attributesToBePassedToPopoverCard={dataToGenerateAnotherQuestionSet} questions={newQuestionSet}/>
                : null
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