import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Cookies from "js-cookie";

const CheckAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    let token = Cookies.get('token');

    return (
        (auth?.token || token)
            ? <Navigate to='/cashier' state={{ from: location }} replace />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
};

export default CheckAuth;