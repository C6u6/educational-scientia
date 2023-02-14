interface Props {
    title: string;
    text: string;
    opitions: string[];
};

export function ConfigurationalFunction(props: Props) {
    return (
        <div className="bg-Gray text-DarkBlue-500 rounded-lg w-[40%] flex flex-col gap-5 z-20 absolute">
            <h1 className="text-3xl mx-auto">
                {props.title}
            </h1>
            <div className="text-sm mx-auto break-all px-8">
                {props.text}
            </div>
            <div className="mx-auto bg-LightBlue-400 text-white w-[55%] h-8 rounded-full flex justify-center"
             role='button'
            >
                <select name="configurational-response" id="configurational-response"
                className="bg-transparent w-[100%] text-center"
                >
                    {
                        props.opitions.map(option => {
                            return (
                                <option value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</option>
                            )
                        })
                    }
                </select>
            </div>
            <button className="bg-Yellow text-Brown w-[20%] mx-auto rounded-lg text-lg mb-2">
                Enviar
            </button>
        </div>
    );
};