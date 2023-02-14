interface Props {
    total: number,
    right: number,
    wrong: number,
    passed: number,
}

export function AnalysingAQuestionSet(props: Props) {
    
    return (
        <div className="bg-Gray rounded-lg w-[75%] mx-auto text-DarkBlue-500 ">
            <div className="flex flex-col">
                <h2></h2>
                {props}
            </div>
            <div className="flex flex-col">
                <h2></h2>
                {props}
            </div>
            <div className="flex flex-col">
                <h2></h2>
                {props}
            </div>
            <div className="flex flex-col">
                <h2></h2>
                {props}
            </div>
        </div>
    );
};