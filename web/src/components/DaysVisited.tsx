import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { generateDatesFromYearBeginning } from "../utils/generate.days.from.year.beggining";
import { ActivityInADay } from "./ActivityInADay";

type Summary = {
    id: string;
    date: string;
    goal?: number,
    totalQuestions?: number,
    natureOfQuestions?: string[],
    questionsAnsweredCorrecly?: number,
    percentageOfCorrectnessForEachQuestionNature?: number[],
  }[];

export function DaysVisited() {
    const weekDays = ['D','S','T','Q','Q','S','S'];

    const allDaysUntilNow = generateDatesFromYearBeginning();

    const minimumSummaryDatesSize = 33 * 7 // 39 weeks and 3 days
    const amountOfDaysToFill = minimumSummaryDatesSize - allDaysUntilNow.length;

    const sampleData = {
        id: '',
        date: '16-02-2023',
        goal: 30,
        totalQuestions: 90,
        natureOfQuestions: ['física', 'química'],
        questionsAnsweredCorrecly: 88,
        percentageOfCorrectnessForEachQuestionNature: [100, 98]
    }

    const [summary, setSummary] = useState<Summary>([sampleData])

    useEffect(() =>{
        api.get('summary').then(response => {
        setSummary(response.data)
        })
    },[]);

    return (
        <div className="rounded-lg bg-white flex p-2 max-w-fit w-[97%] mx-auto my-5 gap-2">
            <div className="grid grid-rows-7 grid-flow-row gap-[6px]">
                {
                    weekDays.map((el, i) => {
                        return (
                            <div 
                             key={`day-${el}-at-index-${i}`}
                             className="text-lg font-light"
                            >
                                {el}
                            </div>
                        )
                    })
                }
            </div>
            <div className="h-[216px] grid grid-rows-7 grid-flow-col gap-y-[26px] gap-x-3 pt-1">

                {summary.length && allDaysUntilNow.map((date) => {

                    const dayInSummary = summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day');
                    })

                    return (
                        <ActivityInADay
                         key={date.toISOString()}
                         date={date}
                         goal={dayInSummary?.goal}
                         totalQuestions={dayInSummary?.totalQuestions}
                         natureOfQuestions={dayInSummary?.natureOfQuestions}
                         questionsAnsweredCorrecly={dayInSummary?.questionsAnsweredCorrecly}
                         percentageOfCorrectnessForEachQuestionNature={dayInSummary?.percentageOfCorrectnessForEachQuestionNature}
                        />
                    )
                    })
                }

                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, i) => {
                    return (
                        <div key={i} className="w-5 h-5 bg-Gray border-2 border-zinc-800 rounded-[4px] opacity-40 cursor-not-allowed" />
                    )
                })}
            </div>
        </div>
    );
}; 