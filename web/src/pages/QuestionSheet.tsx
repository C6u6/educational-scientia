import { FormEvent, useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { DocumentTitle } from "../components/DocumentTitle";
import { ShowExplanations } from "../components/ShowExplanations";
import { api } from "../lib/axios";
import { QuestionSheetApplied } from "./QuestionSheetApplied";

export type validInputsType = Array<{
    input: string,
    fieldIndex: number
}>

type APIQuestionRequest = { 
    _id: string;
    props: {
        year: number;
        title: string;
        topic: string;
        subject: string;
        imagePath?: string | undefined;
        institution: string;
    };
    alternatives: {
        alternative1: string;
        alternative2: string;
        alternative3: string;
        alternative4: string;
        alternative5: string;
    };
};

type Question = {
    year: number,
    title: string,
    topic: string,
    subject: string,
    imagePath?: string,
    institution: string,
    alternatives: string[],
};

export function QuestionSheet() {

    const [checked, setChecked] = useState<Array<number>>([]);

    const [inputs, setInputs] = useState<Array<{
        index: number,
        input: string
    }>>([]);

    const validInputs: validInputsType = [];

    const [dataToFiltrateQuestions, setDataToFiltrateQuestions] = useState<validInputsType>([]);

    const [question, setQuestions] = useState<Array<{
        year: number,
        title: string,
        topic: string,
        subject: string,
        imagePath?: string,
        institution: string,
        alternatives: string[],
    }>>([]);

    const [mustShowExplanation, setMustShowExplanation] = useState(false);

    useEffect(() => {
        inputs.forEach(el => {
            if (checked?.includes(el?.index)) {
                validInputs.push({fieldIndex: el?.index, input: el?.input});
            };

            if (validInputs.includes({fieldIndex: el?.index, input: el?.input}) && !checked?.includes(el?.index)) {
                delete validInputs[validInputs.indexOf({fieldIndex: el?.index, input: el?.input})];
            };
        });
    }, [inputs, checked]);

    function addCheckedInputs(index: number) {
        if (checked?.includes(index)) {
            setChecked(prevArray => {
                const updatedArray = prevArray.splice(index, index);
                return updatedArray;
            });
        } else {
            setChecked(prevArray => {
                return [...prevArray, index];
            })
        };
    };

    function handleInput(input: string, index: number) {
        setInputs(inputs => {
            // Check whether the object exists
            const copy = [...inputs];

            const inputObject = copy.filter(el => {
                el?.index === index;
            }); // [{index, input}, {index, input}, {index, input}]

            if (!inputObject[0]) {
                copy[index] = {index: index, input: input};
                return copy;
            };

            const indexOfInputObject = inputs.indexOf(inputObject[0]);

            delete copy[indexOfInputObject];

            copy[indexOfInputObject] = {
                index: index,
                input: input,
            }

            return copy;
        })
    };

    function handleInfoClick() {
        setMustShowExplanation(() => {
            return true;
        }) 
    };

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        setDataToFiltrateQuestions(() => {
            return validInputs;
        });

        // Fetch request
        let query = '';

        dataToFiltrateQuestions.forEach(el => {
            query += `${queryKeys[el.fieldIndex]}=${el.input}&`;
        });

        /* api.get(`question-library?${query}`).then(response => {

            console.log(response.data.alternatives);
            
            setQuestions(() => {return []});

            let temp: Question;
            
            response.data.map(async (el: APIQuestionRequest)  => {
                // Alternatives are a promise
                let a = await el.alternatives;
                temp = {
                    ...el.props,
                    alternatives: Object.values(el.alternatives),
                };
                setQuestions((prevArray) => {
                    return [...prevArray, temp];
                });
            });
        });
        console.log(question); */
    };

    const fields = ['Instituição', 'Ano', 'Matéria', 'Tópico', 'Tempo', 'Quantidade'];
    const queryKeys = ['institution', 'year', 'subject', 'topic', 'time', 'quantity'];

    return (
        <>
            {
                dataToFiltrateQuestions.length == 0 ?
                <>
                    <DocumentTitle title="Filtragem de questão" />
                    <form 
                        onSubmit={(e) => handleSubmit(e)}
                        className={`flex flex-col bg-Gray w-fit mx-auto p-6 rounded-lg mt-3 relative`}
                    >
                        <h1 className="text-DarkBlue-500 font-semibold text-5xl mt-5 mx-auto">Escolha critérios filtrativos</h1>
                        <h4 className="text-DarkBlue-500  text-sm my-3 mx-auto">Preencha os campos com critérios de interesse</h4>
                        <div className="flex mt-4">
                            <div className="text-DarkBlue-500 text-xl flex flex-col mx-auto gap-6">
                                {
                                    fields.map((field, index) => {
                                        return (
                                            <div key={`label-for-${field}-at-index-${index}`} 
                                                className="flex gap-8 mx-auto "
                                            >
                                                <section className="flex gap-8 w-[147.45px]">
                                                    <input type="checkbox" name={field} id={`label-for-${field}`}
                                                        className="my-auto"
                                                        onChange={() => addCheckedInputs(index)}
                                                        checked={checked?.includes(index)}
                                                    />
                                                    <label htmlFor={`label-for-${field}`}>
                                                        {field}
                                                    </label>
                                                </section>

                                                <input key={`input-for-${field}-at-index-${index}`}
                                                    type={field == 'Ano' || field == 'Tempo' || field == 'Quantidade' ? 'number' : 'text'} name={field} id={field} 
                                                    placeholder={`Preencha com ${field.charAt(0).toLowerCase() + field.slice(1)} de interesse`}
                                                    
                                                    className={`rounded-lg bg-Gray border-[0.5px] 
                                                    ${validInputs.some(el => el.fieldIndex == 1 && Number(el.input) < 1900) || validInputs.some(el => el.fieldIndex == 4 && Number(el.input) < 0) ? 'border-red-900' : ''}
                                                    w-[300px] border-DarkBlue-500 h-8 placeholder-DarkBlue-500 text-center text-[17px] placeholder-opacity-80 
                                                    ${checked?.includes(index) ? '': 'opacity-40'}
                                                    focus:placeholder-transparent text-ellipsis`}
                                                    
                                                    disabled={!checked?.includes(index)}
                                                    onChange={(e) => handleInput(e.target.value, index)}
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="flex justify-center mt-16 mb-8 gap-9">
                            <BackButton ClassName="w-fit text-lg hover:cursor-pointer font-semibold text-LightBlue-500" />
                            <button type="submit"
                                className="bg-LightBlue-500 text-white font-semibold text-xl rounded-lg  w-[300px] h-10"
                            >
                                Buscar Questões
                            </button>
                            <button
                             className="bg-LightBlue-500 text-white font-semibold text-xl w-7 h-7 rounded-[50%] my-auto"
                             onClick={handleInfoClick}
                             >
                                ?
                            </button>
                            {
                                mustShowExplanation ? <ShowExplanations stateFunction={setMustShowExplanation}/> : null
                            }
                        </div>
                    </form>
                </>
                :
                <QuestionSheetApplied attributesToBePassedToPopoverCard={dataToFiltrateQuestions} questions={question}/>
            }
        </>
    )
}