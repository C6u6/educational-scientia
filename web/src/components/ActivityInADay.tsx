import * as Popover from '@radix-ui/react-popover';
import { clsx } from 'clsx';
import dayjs from 'dayjs';


interface Props {
    date: Date ,
    goal?: number,
    totalQuestions?: number,
    natureOfQuestions?: string[],
    questionsAnsweredCorrecly?: number,
    percentageOfCorrectnessForEachQuestionNature?: number[],
}

export function ActivityInADay({ goal = 20, date, totalQuestions = 0, natureOfQuestions, questionsAnsweredCorrecly, percentageOfCorrectnessForEachQuestionNature}: Props) { // 20 is a like a quantity of questions the user has set as goal. For now this is a arbitrary default

    const completedPercentage = goal > 0 && totalQuestions > 0 ? Math.round((totalQuestions / goal) * 100) : 0;

    const dayAndMonth = dayjs(date).format('DD/MM');
    const dayOfWeek = dayjs(date).format('dddd');

    return (
        <Popover.Root>
            <Popover.Trigger
              className={clsx('w-5 h-5 bg-zinc-900 border-2 border-zinc-800 rounded-[4px]', {
                'bg-LightBlue-500 opacity-10 border-LightBlue-400': completedPercentage === 0,
                'bg-LightBlue-500 opacity-20 border-LightBlue-400': completedPercentage > 0 && completedPercentage <= 20,
                'bg-LightBlue-500 opacity-40 border-LightBlue-400': completedPercentage >= 20 && completedPercentage <= 40,
                'bg-LightBlue-500 opacity-60 border-LightBlue-400': completedPercentage >= 40 && completedPercentage <= 60,
                'bg-LightBlue-500 opacity-80 border-LightBlue-400': completedPercentage >= 60 && completedPercentage <= 80,
                'bg-LightBlue-500 opacity-100 border-LightBlue-400': completedPercentage >= 80,

              })} />
            
            <Popover.Portal>
                <Popover.Content className="min-w-{320px} p-6 rounded-2xl bg-zinc-900 flex flex-col">
                    <span className='font-semibold text-zinc-400'>{dayOfWeek}</span>
                    <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayAndMonth}</span>

                    <span>Questões respondidas: {totalQuestions}</span>
                    <span>Questões respondidas corretamente: {questionsAnsweredCorrecly}</span>
                    <ul>
                        {
                            natureOfQuestions?.map((el, i) => {
                                return (
                                    <li key={`{el}-at-index-${i}`}>
                                        {el}-
                                        <span className='text-green-700'>{percentageOfCorrectnessForEachQuestionNature![i]}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <span><button>Refazer questões</button></span>


                    <Popover.Arrow height={8} width={16} className="fill-LightBlue-500" />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
};