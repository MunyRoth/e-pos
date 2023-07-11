import React from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

const Authentication = () => {
    const { user } = useAuth();
    const location = useLocation();

    return (
        user?.username
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
};

export default Authentication;