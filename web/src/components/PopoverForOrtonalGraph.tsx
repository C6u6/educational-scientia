import { Icons } from "./Icons";
import * as Popover from '@radix-ui/react-popover';

export function PopoverForOrtonalGraph(props: any) {

    const percentageFromLeft = [12, 25.5, 39, 52.7, 66, 79.5, 93];
    const percentageFromBottom: number[] = [];

    const generalCorrectnessForADay = [100, 90, 20, 10, 40, 12, 67];

    generalCorrectnessForADay.forEach(el => {
        const establishingEquivalanceForComponent = (el * 74) / 100;
        percentageFromBottom.push(establishingEquivalanceForComponent);
    });

    function randomPointImgNumber() {
        let pointImgNumber;
        const randomNumber = Math.random();

        if (randomNumber < 0.33) {
            pointImgNumber = 0;
        } else if (randomNumber > 0.33 && randomNumber < 0.66) {
            pointImgNumber = 1;
        } else {
            pointImgNumber = 2;
        };
        return pointImgNumber;
    };

    return (
        <>
            {
                Array.from({length: 7}).map((_, i) => {
                    return (
                        <Popover.Root>
                            <Popover.Trigger>
                                <Icons key={`${i}th ball`}
                                directory='dashboard' imageName={`ball-${randomPointImgNumber()}`} withoutLabel={true} label='' width={16} height={16}
                                ClassNameForDiv={`absolute z-10 left-[${percentageFromLeft[i]}%] bottom-[${percentageFromBottom[i]}%]`}
                                />
                            </Popover.Trigger>
                        
                            <Popover.Portal>
                                <Popover.Content className="min-w-{320px} p-6 rounded-2xl bg-zinc-900 flex flex-col">
                                    <p><small>Relativo a todas as questões feitas nesse dia</small></p>
                                    <span>Performance geral de acertividade: {generalCorrectnessForADay[i]}</span>
                                    <Popover.Arrow height={8} width={16} className="fill-LightBlue-500" />
                                </Popover.Content>
                            </Popover.Portal>
                        </Popover.Root>
                    )
                })
            }
        </>
    )
}; 