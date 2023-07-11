import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/cashier";
    const [user, setUser] = useState({
        username: "",
        permissions: [],
    });
    const login = (user, role) => {
        console.log(role);
        if (role === "admin") {
            setUser({ username: user, permissions: ["view_dashboard"] });
        } else {
            setUser({ username: user, permissions: ["view_profile"] });
        }
        navigate(redirectPath, { replace: true });
    };
    const logout = () => {
        setUser({ username: "", permissions: [] });
    };
    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};