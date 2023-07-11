import React, {useContext} from "react";
import { Navigate, useLocation } from "react-router-dom";

import {userContext} from '../../../contexts/userContext';
import {AuthProvider} from "../providers/AuthProvider";

const Authentication = ({ children }) => {
    return <AuthProvider><Main children={children}/></AuthProvider>
};

function Main({ children }) {
    const {user}  = useContext(userContext);
    const location = useLocation();
    console.log(user.username);
    if (!user.username) {
        return <span>Not Login</span>;
        // return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
    return children;
}

export default Authentication;