import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

const Authentication = () => {
    const { auth } = useAuth();
    const location = useLocation();

    let token = localStorage.getItem("token");

    return (
        auth?.token
            ? <Outlet />
            : token
                ? <Navigate to="/user" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    )
};

export default Authentication;