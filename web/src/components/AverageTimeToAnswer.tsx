import { useState } from "react";
import { selectOptionsAndValues } from "../utils/average.time.to.answer.select.options";

export function AverageTimeToAnswer() {

    const [period, setPeriod] = useState<string>(''); // request the time the user speant to answer any question whitin this period

    // Needs to contact an endpoint, obtain all info related to time spent in each question whitin
    // the select period

    let time;

    function handleChange(period: string) {
        setPeriod(() => {
            return period;
        });
    };

    return (
        <div className="bg-white rounded-lg w-[20%] h-fit flex flex-col justify-between">
            <p className="mx-auto"> Tempo Médio</p>
            <div className="bg-LightBlue-400 rounded-[50%] text-white m-auto my-5 flex justify-center">
                <select name="AverageTime" id="AverageTime"
                 className={`bg-transparent py-4 px-2`}
                 onChange={(e) => handleChange(e.target.value)}
                >
                    {
                        selectOptionsAndValues.map((el, i) => {
                            return (
                                <option key={`option-for-period-${el.label}`} value={el.value}>{el.label}</option> 
                            )
                        })
                    }
                </select>
            </div>

            {
                time != undefined ? <div className="mx-auto mb-5"><p>{time} segundos</p></div> : null
            }
            
        </div>
    )
};