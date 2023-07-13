import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useState({
        token: '',
        permissions: []
    });
    const login = (token, role) => {
        localStorage.setItem("token", token);
        if (role === "admin") {
            setAuth({ token: token, permissions: ["view_dashboard"] });
            navigate(location.state?.path || "/admin/dashboard", { replace: true });
        } else {
            setAuth({ token: token, permissions: ["view_profile"] });
            navigate(location.state?.path || "/cashier", { replace: true });
        }
    };
    const logout = () => {
        localStorage.removeItem("token");
        setAuth({ token: '', permissions: [] });
        navigate(location.state?.path || "/login", { replace: true });
    };
    return <AuthContext.Provider value={{ auth, setAuth, login, logout}}>{children}</AuthContext.Provider>;
};