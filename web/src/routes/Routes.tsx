import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import { Welcome } from '../pages/Welcome';
import { sideBarInfoIcons } from '../utils/infoIconsSideBar';


export function ApplicationRoutes() {
    const sideBarPaths = sideBarInfoIcons.slice(1);

    return(
        <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='register' element={<Register />}/>
            <Route path='home'>
                <Route index element={<Dashboard />} />
                {sideBarPaths.map(info => {
                    return (
                        <Route key={info.name} path={info.name} element={info.element}/>
                    )
                })}
                <Route path='login' element={<Login />} />
            </Route>
        </Routes>
    )
};