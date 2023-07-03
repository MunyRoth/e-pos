import {Navigate, Outlet, useLocation} from 'react-router-dom';

const AuthWrapper = () => {
    const location = useLocation(); // current location

    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

    return isLoggedIn
        ? (
            <>
            <Outlet />
            </>
        )
        : (
            <Navigate
                to="/login"
                replace
                state={{ from: location }} // <-- pass location in route state
            />
        );
};

export default AuthWrapper;