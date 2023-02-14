interface Props {
    ClassName?: string
}
export function BackButton({ ClassName = "mx-auto text-LightOrange w-fit text-lg hover:cursor-pointer mt-4" }: Props) {
    function handleClick() {
        window.history.back();
    };

    return (
        <button
         className={ClassName}
         onClick={handleClick} 
        >
            Voltar
        </button>
    )
};