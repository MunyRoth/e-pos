import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';

const AuthWrapper = () => {
    const location = useLocation(); // current location

    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    return isLoggedIn
        ? <>
        <Navbar />
        <Outlet />
        </>
        : (
            <Navigate
                to="/login"
                replace
                state={{ from: location }} // <-- pass location in route state
            />
        );
};

export default AuthWrapper;