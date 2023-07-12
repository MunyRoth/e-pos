import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || "/cashier";
    const [auth, setAuth] = useState({
        token: '',
        permissions: []
    });
    const login = (token, role) => {
        if (role === "admin") {
            setAuth({ token: token, permissions: ["view_dashboard"] });
        } else {
            setAuth({ token: token, permissions: ["view_profile"] });
        }
        navigate(redirectPath, { replace: true });
    };
    const logout = () => {
        setAuth({ token: '', permissions: [] });
    };
    return <AuthContext.Provider value={{ auth, setAuth, login, logout}}>{children}</AuthContext.Provider>;
};