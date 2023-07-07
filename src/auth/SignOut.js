import {Navigate, useLocation} from 'react-router-dom';

const SignOut = () => {
    const location = useLocation(); // current location

    localStorage.setItem("isLoggedIn", JSON.stringify(false));
    localStorage.removeItem("token");

    localStorage.removeItem("storeName");
    localStorage.removeItem("storeId");

    return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }} // <-- pass location in route state
            />
        );
};

export default SignOut;