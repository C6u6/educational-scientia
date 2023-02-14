import { useRef, useState } from "react";
import { DocumentTitle } from "../components/DocumentTitle";
import { PopoverCard } from "../components/PopoverCard";

export interface Question {
    year: number,
    title: string,
    institute: string,
    alternatives: string,
};

interface Questions {
    questions: Question[],

}

type Props = {
    questions: [{
        year: number,
        title: string,
        institute: string,
        alternatives: string,
    }],
    attributesToBePassedToPopoverCard: {
        year: number,
        title: string,
        institute: string,
        alternatives: string,}
};

export function QuestionSheetApplied(/* { dataToFiltrateQuestions: Question} */) {
    // Acess the endpoint in the server which will give the questions then call the QuestionSheetApplied

    const questions = [
        {
            title: 'Esse é o título da primera questão',
            institute: 'INstituto',
            year: 2023,
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
            institute: 'INstituto',
            year: 2023,
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
            institute: 'INstituto',
            year: 2023,
            alternatives: [
                'Essa é a primeira alternativa da terceira questão',
                'Essa é a segunda alternativa da terceira questão',
                'Essa é a terceira alternativa da terceira questão',
                'Essa é a quarta alternativa da terceira questão',
                'Essa é a quinta alternativa da terceira questão',
            ]
        },
    ];

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
                        ({`${questions[questionBeenApplied].institute} - ${questions[questionBeenApplied].year}`}) {questions[questionBeenApplied].title}
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
                        <div
                        className="bg-LightBlue-500 text-white w-fit rounded-[50%] p-2 text-lg my-auto"
                        >
                            cronometro if any
                        </div>
                    </div>
                </div> : null
            }
            {
                answers.current.length == questions.length ? <PopoverCard title="Parabéns" shortPharagraph="You finished n questions" /* dataToFiltrateQuestions={dataToFiltrateQuestions} */ /> : null
            }
        </div>
    );
}; 