import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Unauthorized from "../../../pages/Unauthorized";
const Authorization = ({ permissions }) => {
    const { auth } = useAuth();
    const location = useLocation();
    if (auth.token) {
        const userPermission = auth.permissions;
        const isAllowed = permissions.some((allowed) => userPermission.includes(allowed));
        return isAllowed ? <Outlet /> : <Unauthorized />;
    }
    return <Navigate to="/login" state={{ path: location.pathname }} replace />;
};
export default Authorization;