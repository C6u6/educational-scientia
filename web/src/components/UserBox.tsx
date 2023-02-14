import { Link } from "react-router-dom";
import { Icons } from "./Icons";

interface Props {
    logoutIcon: string,
    toggle: boolean,
}

export function UserBox({toggle, logoutIcon} : Props) {
    return (
        <div className={`bg-[#022750] mt-4 flex gap-12 h-14 rounded-t-lg rounded-br-lg hover:bg-DarkBlue-400 hover:rounded-lg ${toggle ? 'ml-auto mr-auto h-9 w-9' : ''}`}>
            <Link to="user">
                <Icons 
                    imageName="perfil" directory="perfil" label="username" width={25} height={25}
                    ClassNameForDiv={`flex gap-4 ${toggle ? 'px-2' : "pl-7"} mt-3`}
                    withoutLabel={toggle}
                />
            </Link>

            {!toggle ? 
                <Link to="logout"
                className="w-30 h-30 my-auto"
                >
                    <img style={{width: 20, height: 20}} src={logoutIcon} alt="image for logout icon" />
                </Link>: null
            }
        </div>
    )
};