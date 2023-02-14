import { BackButton } from "../components/BackButton";
import { DocumentTitle } from "../components/DocumentTitle";

export function Register() {

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Do stuff here
    }

    return (
        <div className="w-screen h-screen bg-DarkBlue-500">
            <DocumentTitle title="Resgistrar-se" />

            <form 
             action=""
             onSubmit={(e) => handleSubmit(e)}
             className={`flex flex-col gap-6`}
            >
                <h1 className="text-LightOrange font-semibold text-5xl mt-5 mx-auto">Registre-se!</h1>
                <h4 className="text-LightOrange font-semibold text-sm my-3 mx-auto">Forneça algumas informções importantes</h4>
                <div className="flex ">
                    <div className="text-white text-xl flex flex-col ml-auto mr-14 gap-6">
                        <label htmlFor="nome">
                            Nome
                        </label>
                        <label htmlFor="email">
                            Email
                        </label>
                    </div>

                    <div className="flex flex-col mr-auto gap-6">
                        <input type="text" name="nome" id="nome" 
                         placeholder="Preencha com seu nome"
                         className="rounded-2xl bg-Gray h-8 placeholder-DarkBlue-500 text-center placeholder-opacity-80"
                        />
                        <input type="email" name="email" id="email" 
                         placeholder="Preencha com seu email"
                         className="rounded-2xl bg-Gray h-8 placeholder-DarkBlue-500 text-center placeholder-opacity-80"
                        />
                    </div>
                </div>
                <div className="w-fit mx-auto">
                    <button className="bg-Yellow text-Brown border-none text-xl rounded-lg mx-auto w-[300px] h-10 shadow-lg hover:mt-[-16px] hover:shadow-yellow-100 transition-all">
                        Finalizar
                    </button>
                </div>
                <div className="absolute left-[48%] top-[55%]">
                    <BackButton />
                </div>
            </form>

        </div>
    )
}; 