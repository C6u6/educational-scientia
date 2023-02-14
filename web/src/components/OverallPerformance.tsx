import { useState } from 'react';
import ortogonalPlan from '../assets/dashboard/ortogonal-plan.svg';
import secondImg from '../assets/dashboard/ball-0.svg';

export function OverallPerformance() {
    const [pointImg, setPointImg] = useState([]);

    function randomNumber() {
        let pointImgNumber;

        if (Math.random() < 0.33) {
            pointImgNumber = 0;
        } else if (Math.random() > 0.33 && Math.random() < 0.66) {
            pointImgNumber = 1;
        } else {
            pointImgNumber = 2;
        };
        return pointImgNumber;
    };

    function generatePositionIcons() {
        let imgs = []
        let i = 0;
        while (i < 6) {
            import(`../assets/dashboard/ball-${randomNumber}.svg`).then( img => imgs.push(img));
            i++;
        };

        setPointImg(imgs);
    };

    generatePositionIcons();

    return (
        <div className="bg-transparent w-fit h-fit p-2 ">
            <div className='bg-white rounded-lg w-fit h-fit relative'>
                <img src={ortogonalPlan} alt="Image representaing an ortogonal plan"
                 className=''
                />
            </div>
        </div>
    );
};