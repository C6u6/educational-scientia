import { Link } from "react-router-dom";
import { Icons } from "./Icons";

import toggleIcon from '../assets/sidebar/toggle.svg';
import logoutIcon from '../assets/sidebar/logout.svg';
import { sideBarInfoIcons } from "../utils/infoIconsSideBar";
import { useState } from "react";
import { UserBox } from "./UserBox";

const UserIsAuthenticated = false;

export function Sidebar() {
    const [toggle, setToggle] = useState(false);

    function toggleSidebar(toggle: boolean) {
       setToggle(!toggle);
    };

    return (
        <div
         className={`h-fit w-1/6 mb-2 mt-2 ml-2 bg-DarkBlue-500 text-Orange rounded-lg overflow-hidden shadow-2xl shadow-black ${toggle ? "w-[4%]" : ''}`}
        >
            
            <div className="flex mb-5 gap-12 py-2">
                {!toggle ? <h1 className={`font-bold ml-4 text-2xl`}>Scientia</h1> : null}
                <span className={`p-1 hover:bg-Gray hover:rounded-[50%] ${!toggle ? '': 'ml-auto mr-auto'}`} onClick={() => toggleSidebar(toggle)}>
                    <img src={toggleIcon} alt="image for toggle icon" onClick={() => toggleSidebar(toggle)}
                    className={`m-auto mt-1`}
                    />
                </span>
            </div>

            <div className={`bg-LightBlue-500 ml-1 mr-1 ${toggle ? 'ml-[20%] h-9 w-9' : 'h-16'} rounded-lg hover:bg-LightBlue-400`}>
                <Link to="home"
                className=" text-white font-semibold "
                >
                    <Icons 
                        imageName="dashboard" directory="sidebar" label="Dashboard" width={toggle ? 25: 30} height={toggle ? 25: 30}
                        ClassNameForDiv={`${toggle ? 'm-auto w-fit h-fit' : 'flex justify-center gap-4 pt-4'}`}
                        ClassNameForImg={`${toggle ? 'pt-2 ': ''}`}
                        withoutLabel={toggle}
                    />
                </Link>
            </div>

            {!toggle ? <hr className={`border-[#B2A1A9] w-[95%] mb-3 mt-3 mr-auto ml-auto opacity-40`} /> : null}

            <div className={`${toggle ? 'ml-auto mr-auto w-fit' : ''}`}>
            {!toggle ? <p><small className={`text-Beige ml-[21px]`}>Estudar</small></p> : null}
                {sideBarInfoIcons.slice(1,5).map((el) => {
                    return (
                        <Link to={el.name}
                         key={el.name}
                        >
                            <Icons 
                                imageName={el.name} directory={el.directory} label={el.label} width={30} height={30}
                                ClassNameForDiv={`flex ${toggle ? 'px-2' : "pl-7 gap-4"} pt-2 pb-2 hover:bg-DarkBlue-400 hover:rounded-lg transition-all duration-200`}
                                withoutLabel={toggle}
                            />
                        </Link>
                        )
                    })
                }
            </div>

            {!toggle ? <hr className={`border-[#B2A1A9] w-[95%] mb-3 mt-3 mr-auto ml-auto opacity-40`} /> : null}

            <div className={`${toggle ? 'ml-auto mr-auto w-fit' : ''}`}>
                {!toggle ? <p><small className={`text-Beige ml-[21px] `}>Social</small></p> : null}
                {sideBarInfoIcons.slice(5,6).map((el) => {
                    return (
                        <Link to={el.name}
                         key={el.name}
                        >
                            <Icons 
                                imageName={el.name} directory={el.directory} label={el.label} width={25} height={25}
                                ClassNameForDiv={`flex gap-4 ${toggle ? 'px-2' : "pl-7"} pt-2 pb-2 hover:bg-DarkBlue-400 hover:rounded-lg transition-all duration-200`}
                                withoutLabel={toggle}
                            />
                        </Link>
                        )
                    })
                }
            </div>

            {!toggle ? <hr className={`border-[#B2A1A9] w-[95%] mb-3 mt-3 mr-auto ml-auto opacity-40`} /> : null}

            <div className={`${toggle ? 'ml-auto mr-auto w-fit' : ''}`}>
            {!toggle ? <p><small className={`text-Beige ml-[21px]`}>Informações técnicas</small></p> : null}
                {sideBarInfoIcons.slice(6).map((el) => {
                    return (
                        <Link to={el.name}
                         key={el.name}
                        >
                            <Icons 
                                imageName={el.name} directory={el.directory} label={el.label} width={25} height={25}
                                ClassNameForDiv={`flex gap-4 ${toggle ? 'px-2' : "pl-7"} pt-2 pb-2 hover:bg-DarkBlue-400 hover:rounded-lg transition-all duration-200`}
                                withoutLabel={toggle}
                            />
                        </Link>
                        )
                    })
                }
            </div>
            {
                UserIsAuthenticated ? <UserBox toggle={toggle} logoutIcon={logoutIcon}/> : <div className="max-w-fit m-auto p-5">
                <Link to="login"
                 className="text-xl text-white truncate"
                >
                    Login
                </Link>
            </div>
            }
        </div>
    );
};