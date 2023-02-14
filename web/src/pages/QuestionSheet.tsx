import { FormEvent, useEffect, useState } from "react";
import { BackButton } from "../components/BackButton";
import { DocumentTitle } from "../components/DocumentTitle";
import { QuestionSheetApplied } from "../pages/QuestionSheetApplied";

type validInputsType = Array<{
    input: string,
    fieldIndex: number
}>

export function QuestionSheet() {

    const [checked, setChecked] = useState<Array<number>>([]);

    const [inputs, setInputs] = useState<Array<{
        index: number,
        input: string
    }>>([]);

    const validInputs: validInputsType = [];

    const [dataToFiltrateQuestions, setDataToFiltrateQuestions] = useState<validInputsType>([]);

    useEffect(() => {
        inputs.forEach(el => {
            if (checked.includes(el.index)) {
                validInputs.push({fieldIndex: el.index, input: el.input});
            };

            if (validInputs.includes({fieldIndex: el.index, input: el.input}) && !checked.includes(el.index)) {
                delete validInputs[validInputs.indexOf({fieldIndex: el.index, input: el.input})];
            };
        });
    }, [inputs, checked]);

    function addCheckedInputs(index: number) {
        if (checked.includes(index)) {
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
                el.index === index;
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

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        setDataToFiltrateQuestions(() => {
            return validInputs;
        })

    };

    const fields = ['lorem', 'lorem', 'lorem'];

    return (
        <>
            {
                dataToFiltrateQuestions == [] ?
                <>
                    <DocumentTitle title="Filtragem de questão" />
                    <form 
                        action=""
                        onSubmit={(e) => handleSubmit(e)}
                        className={`flex flex-col`}
                    >
                        <h1 className="text-DarkBlue-500 font-semibold text-5xl mt-5 mx-auto">Escolha critérios filtrativos</h1>
                        <h4 className="text-DarkBlue-500  text-sm my-3 mx-auto">Preencha os campos com critérios de interesse</h4>
                        <div className="flex mt-4">
                            <div className="text-DarkBlue-500 text-xl flex flex-col mx-auto gap-6">
                                {
                                    fields.map((field, index) => {
                                        return (
                                            <div key={`label-for-${field}-at-index-${index}`} 
                                                className="flex gap-8 justify-center mx-auto "
                                            >
                                                <input type="checkbox" name={field} id={`label-for-${field}`}
                                                    className="my-auto"
                                                    onChange={() => addCheckedInputs(index)}
                                                    checked={checked.includes(index)}
                                                />
                                                <label htmlFor={`label-for-${field}`}>
                                                    {field}
                                                </label>

                                                <input key={`input-for-${field}-at-index-${index}`}
                                                    type={field == 'Ano' ? 'number' : 'text'} name={field} id={field} 
                                                    placeholder={`Preencha com ${field} de interesse`}
                                                    className={`rounded-lg bg-Gray border-[0.5px] w-[300px] border-DarkBlue-500 h-8 placeholder-DarkBlue-500 text-center text-[17px] placeholder-opacity-80 ${checked.includes(index) ? '': 'opacity-40'} focus:placeholder-transparent text-ellipsis`}
                                                    disabled={!checked.includes(index)}
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
                            <button className="bg-LightBlue-500 text-white font-semibold text-xl w-7 h-7 rounded-[50%] my-auto">
                                ?
                            </button>
                        </div>
                    </form>
                </>
                :
                <QuestionSheetApplied />
            }
        </>
    )
}