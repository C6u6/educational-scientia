import ortogonalPlan from '../assets/dashboard/ortogonal-plan.svg';
import { Icons } from '../components/Icons';
import { PopoverForOrtonalGraph } from './PopoverForOrtonalGraph';

export function OverallPerformance({generalCorrectnessForADay = [100, 90, 20, 10, 40, 12, 67]}) {
    const percentageFromLeft = [12, 25.5, 39, 52.7, 66, 79.5, 93];
    const percentageFromBottom: number[] = [];

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
        <div className="bg-transparent w-fit h-fit p-2 relative">
            <div className='bg-white rounded-lg w-fit h-fit relative'>
                <img src={ortogonalPlan} alt="Image representaing an ortogonal plan"
                 className='relative'
                />
                {/* {
                    Array.from({length: 7}).map((_, i) => {
                        return (
                            <Icons key={`${i}th ball`}
                             directory='dashboard' imageName={`ball-${randomPointImgNumber()}`} withoutLabel={true} label='' width={16} height={16}
                             ClassNameForDiv={`absolute z-10 left-[${percentageFromLeft[i]}%] bottom-[${percentageFromBottom[i]}%]`}
                            />
                        )
                    })
                } */}

                <PopoverForOrtonalGraph />
            </div>
        </div>
    );
};