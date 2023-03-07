import { useRef, useState } from "react";
import { CountDownTimer } from "../components/CountDownTimer";
import { DocumentTitle } from "../components/DocumentTitle";
import { PopoverCard } from "../components/PopoverCard";
import { validInputsType } from "./QuestionSheet";

export type Props = {
    questions: Array<{
        year: number,
        title: string,
        topic: string,
        subject: string,
        imagePath?: string,
        institution: string,
        alternatives: string[],
    }>,
    attributesToBePassedToPopoverCard: validInputsType
};

export function QuestionSheetApplied({attributesToBePassedToPopoverCard, questions}: Props) {
    // Acess the endpoint in the server which will give the questions then call the QuestionSheetApplied

    const exampleQuestions = [
        {
            title: 'Esse é o título da primera questão',
            institution: 'INstituto',
            year: 2023,
            topic: 'No one',
            subject: 'One',
            imagePath: 'Taking to long',
            alternatives: [
                'Essa é a primeira alternativa da primera questão Essa é a primeira alternativa da primera questão Essa é a primeira alternativa da primera questão Essa é a primeira alternativa da primera questão Essa é a primeira alternativa da primera questão',
                'Essa é a segunda alternativa da primera questão',
                'Essa é a terceira alternativa da primera questão',
                'Essa é a quarta alternativa da primera questão',
                'Essa é a quinta alternativa da primera questão',
            ]
        },
        {
            title: 'Esse é o título da segunda questão',
            institution: 'INstituto',
            year: 2023,
            topic: 'No one',
            subject: 'One',
            imagePath: 'Taking to long',
            alternatives: [
                'Essa é a primeira alternativa da segunda questão',
                'Essa é a segunda alternativa da segunda questão',
                'Essa é a terceira alternativa da segunda questão',
                'Essa é a quarta alternativa da segunda questão',
                'Essa é a quinta alternativa da segunda questão',
            ]
        },
        {
            title: 'Esse é o título da terceira questão',
            institution: 'INstituto',
            year: 2023,
            topic: 'No one',
            subject: 'One',
            imagePath: 'Taking to long',
            alternatives: [
                'Essa é a primeira alternativa da terceira questão',
                'Essa é a segunda alternativa da terceira questão',
                'Essa é a terceira alternativa da terceira questão',
                'Essa é a quarta alternativa da terceira questão',
                'Essa é a quinta alternativa da terceira questão',
            ]
        },
    ];

    questions = exampleQuestions;

    const answers = useRef<Array<string>>([]);
    const [questionBeenApplied, setQuestionBeenApplied] = useState(0);
    // One day, allow this to accept multiple answers

    console.log(answers)

    function Answering() {
        setQuestionBeenApplied(question => {
            return question + 1;
        });
    };

    function addAnswer(alternative: string, questionBeenAnswered: number) {
        answers.current[questionBeenAnswered] = alternative;
    };

    return (
        <div className="text-lg">
            {
                answers.current.length !== questions.length ? 
                <div className="rounded-lg text-DarkBlue-500 bg-Gray font-light w-fit max-w-[80%] my-5 mx-auto justify-center">
                    <DocumentTitle title={questions[questionBeenApplied].title} />
                    
                    <h3
                    className="p-5 w-fit mx-auto"
                    >
                        ({`${questions[questionBeenApplied].institution} - ${questions[questionBeenApplied].year}`}) {questions[questionBeenApplied].title}
                    </h3>
                    <div
                    className="p-5 w-fit mx-auto"
                    >
                        {
                            questions[questionBeenApplied].alternatives.map((alternative, index) => {
                                return (
                                    <div
                                    key={`box-for-alternative-${index}-of-question-${questionBeenApplied}`}
                                    className="flex gap-6 my-6"
                                    >
                                        <input type="radio" name={`answer-for-question-${questionBeenApplied}`} id={`alternative-${index}-of-question-${questionBeenApplied}`}
                                        key={`alternative-${index}-of-question-${questionBeenApplied}`}
                                        className=""
                                        onChange={() => addAnswer(alternative, questionBeenApplied)}
                                        />
                                        <span
                                        className="my-auto"
                                        >{alternative}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-around">
                        <button
                        className="bg-LightBlue-500 text-white font-semibold w-[35%] h-8 rounded-lg text-lg my-auto"
                        onClick={Answering}
                        >
                            Responder
                        </button>
                        <div
                        className="bg-LightBlue-500 text-white p-1 w-fit h-fit rounded-[50%] text-lg my-auto"
                        >
                            {questionBeenApplied + 1}/{questions.length}
                        </div>
                        <CountDownTimer 
                         time={100/* Number(attributesToBePassedToPopoverCard.filter(el => el.fieldIndex === 4)[0].input) */}
                         nextQuestionStateFunction={setQuestionBeenApplied}
                         questionBeenApplied={questionBeenApplied} 
                        />
                    </div>
                </div> : null
            }
            {
                answers.current.length == questions.length ? 
                <PopoverCard title="Parabéns" shortPharagraph="You finished n questions" dataToGenerateAnotherQuestionSet={attributesToBePassedToPopoverCard}/>
                : null
            }
        </div>
    );
};