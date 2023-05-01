import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {adminRoutes, authRoutes, publicRoutes} from "../routes.jsx";
import {HOME_ROUTE} from "../utils/consts.js";

const AppRouter = () => {
    const isAuth = false
    const isAdmin = false
    return (
        <Routes>
            {isAdmin && adminRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>)
            }
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>)
            }
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>)
            }
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>} />
        </Routes>
    );
};

export default AppRouter;