import { useState } from "react";
import { BackButton } from "../components/BackButton";
import { DocumentTitle } from "../components/DocumentTitle";

export function Login() {
    const [wasSubmitted, setWasSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Validate email
        // Send email
        // Display 'email sent' mensage
        setWasSubmitted(true);
    }

    return (
        <div className="w-screen h-screen bg-DarkBlue-500">
            <DocumentTitle title="Autenticação" />

            {
                (!wasSubmitted) && <form 
                action=""
                onSubmit={(e) => handleSubmit(e)}
                className={`flex flex-col`}
            >
                <h1 className="text-LightOrange font-semibold text-5xl mt-5 mx-auto">Autenticação!</h1>
                <h4 className="text-LightOrange font-semibold text-sm my-3 mx-auto">Enviar-se-á um link de entrada para você</h4>
                <div className="flex mt-4">
                    <div className="text-white text-xl flex flex-col ml-auto mr-14 gap-6">
                        <label htmlFor="email">
                            Email
                        </label>
                    </div>

                    <div className="flex flex-col mr-auto gap-6">
                        <input type="email" name="email" id="email" 
                            placeholder="Preencha com seu email"
                            className="rounded-2xl bg-Gray h-8 placeholder-DarkBlue-500 text-center placeholder-opacity-80"
                        />
                    </div>
                </div>
                <button className="bg-Yellow text-Brown text-xl rounded-lg mx-auto mt-10 w-[300px] h-10">
                    Confirmar
                </button>
                <BackButton />
            </form>
            }

            {
                (wasSubmitted) && <div className="w-fit mx-auto flex flex-col">
                    <h1 className="text-LightOrange font-semibold text-5xl mt-5 mx-auto">Link enviado!</h1>
                    <h4 className="text-LightOrange font-semibold text-sm my-3 mx-auto">Acesse o email que lhe foi enviado e clique no link disponível</h4>
                    <BackButton />
                </div>
            }

        </div>
    )
};