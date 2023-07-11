import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {userContext} from '../../../contexts/userContext';
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/profile";
    const [user, setUser] = useState({
        username: "",
        permissions: [],
    });
    const login = (user) => {
        console.log(user);
        if (user === "admin") {
            setUser({ username: user, permissions: ["view_dashboard"] });
        } else {
            setUser({ username: user, permissions: ["view_profile"] });
        }
        navigate(redirectPath, { replace: true });
    };
    const logout = () => {
        setUser({ username: "", permissions: [] });
    };
    return <userContext.Provider value={{user, login, logout}}>{children}</userContext.Provider>;
};