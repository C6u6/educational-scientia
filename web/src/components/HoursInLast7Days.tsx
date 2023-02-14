import { useState } from "react";

export function HoursInLast7Days() {
    const hours = [1, 3, 2, 1, 4, 4, 5];
    console.log('hours in last 7 days is working')

    const [showPopoverThroughIndex, setShowPopoverThroughIndex] = useState<number | null>();

    function handleMouseEnter(indexToTrue: number) {
        setShowPopoverThroughIndex(indexToTrue);
    }

    function handleMouseOut() {
        setShowPopoverThroughIndex(null)
    }

    return (
        <div className="bg-white w-fit p-2 h-[200px] rounded-lg flex justify-between flex-col">
            <p className="mx-auto">Horas dedicadas nos últimos 7 dias</p>
            <div className="flex gap-2 justify-center">
                {
                    hours.map((el, index) => {
                        return (
                            <div
                             key={`conteiner-for-${el}-at-index-${index}`}
                            >
                                <div 
                                 key={`${el} hours at index ${index}`}
                                 aria-describedby={`${el} hours at index ${index}`}
                                 className={`bg-LightBlue-400 w-7 mt-auto rounded-t-xl relative`}
                                 style={{height: 16 * el}}
                                 onMouseEnter={() => handleMouseEnter(index)}
                                 onMouseOut={handleMouseOut}
                                />
                                
                                {
                                    showPopoverThroughIndex === index ? <div
                                     className={`z-10 absolute rounded-sm bg-[#2e2e2e] text-[#e1e1e1] text-xs p-1`}
                                     key={`Popover for ${el} hours at index ${index}`}
                                    >
                                        {el} horas
                                    </div> : null
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};