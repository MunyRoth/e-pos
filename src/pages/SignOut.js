import useAuth from "../hooks/useAuth";
import {useEffect} from "react";

const SignOut = () => {
    const { logout } = useAuth();

    useEffect(() => {
        logout();
    }, []);

    return (<></>);
};

export default SignOut;