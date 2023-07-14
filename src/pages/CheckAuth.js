import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CheckAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    let token = localStorage.getItem("token");

    return (
        (auth?.token || token)
            ? <Navigate to="/cashier" state={{ from: location }} replace />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
};

export default CheckAuth;