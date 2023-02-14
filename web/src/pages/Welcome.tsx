import { DocumentTitle } from "../components/DocumentTitle";
import { Icons } from "../components/Icons";
import { YellowButton } from "../components/YellowButton";
import { welcomeInfoIcons } from "../utils/welcomeInfoIcons";

export function Welcome() {
    return (
        <div className="w-screen h-screen bg-DarkBlue-500 flex flex-col gap-28 mt-24">

            <DocumentTitle title="Welcome" />
            
            <h1 className="text-LightOrange text-7xl ml-auto mr-auto ">Bem-vindo!</h1>
            
            <div className="ml-auto mr-auto flex gap-10 h-14">
                <YellowButton url="home" textSize={26} text="Começar"/>
                <YellowButton url="register" textSize={26} text="Registrar-me"/>
            </div>

            <div className="ml-auto mr-auto text-LightOrange flex gap-40">
                {welcomeInfoIcons.map((el) => {
                    return (
                        <Icons
                         key={`${el.label}`}
                         imageName={el.name}
                         label={el.label}
                         directory="welcome"
                         ClassNameForDiv="flex flex-col justify-center ml-auto mr-auto"
                         ClassNameForImg="ml-auto mr-auto mb-2.5"
                        />
                    )
                })}
            </div>
        </div>
    )
}