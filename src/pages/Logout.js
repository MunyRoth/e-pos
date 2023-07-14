import useAuth from "../hooks/useAuth";
import {useEffect} from "react";

const Logout = () => {
    const { auth, logout } = useAuth();

    useEffect(() => {
        logout(auth.token);
    }, []);

    return (<></>);
};

export default Logout;