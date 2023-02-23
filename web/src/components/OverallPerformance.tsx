import ortogonalPlan from '../assets/dashboard/ortogonal-plan.svg';
import { PopoverForOrtonalGraph } from './PopoverForOrtonalGraph';

export function OverallPerformance({generalCorrectnessForADay = [100, 90, 20, 10, 40, 12, 67]}) {
    return (
        <div className="bg-transparent w-fit h-fit p-2 relative">
            <div className='bg-white rounded-lg w-fit h-fit relative'>
                <img src={ortogonalPlan} alt="Image representaing an ortogonal plan"
                 className='relative'
                />
                <PopoverForOrtonalGraph />
            </div>
        </div>
    );
};