interface Props {
    stateFunction: React.Dispatch<React.SetStateAction<boolean>>
}

export function ShowExplanations(props: Props) {

    function handleClick() {
        props.stateFunction(() => {
            return false;
        })
    };

    return(
        <div
         className="bg-Gray rounded-lg text-DarkBlue-500 absolute m-auto top-[30%] border-[1px] border-black w-[90%] font-bold p-3"
        >
            <div
             className="hover:cursor-pointer"
             onClick={handleClick}>
                &times;
            </div>
            <small>
                <p>&emsp;&emsp;Para buscar questões de uma determinada instituição, a saber, clique na caixa de checagem ao lado esquerdo do nome que especifica o campo "Instituição" e prencha com a área que se destacará com o nome da instituição de seu interesse.</p>
                <p>&emsp;&emsp;Esse procedimento funciona para qualquer outro campo.</p>
                <p>&emsp;&emsp;Ademais, espera-se que, quando preecher, caso queira, o campo "Tempo", em segundos, o usuário estabeleça a si mesmo um tempo limite para responder cada questão. Por exemplo, se este campo for habilitado e preenchido com 200, o usuário terá 3 minutos e 20 segundos para responder cada questão.</p>
                <p>&emsp;&emsp;O campo quantidade se refere a quantidade de questões que o usuário deseja receber aṕos o término da busca. Por padrão, são dez questões.</p>
            </small>
        </div>
    );
};