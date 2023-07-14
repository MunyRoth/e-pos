import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import axios from "../../api/axios";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = useState({
        token: '',
        permissions: []
    });

    const setUser = (token, role) => {
        if (role === "Owner") {
            setAuth({ token: token, permissions: ["view_profile", "view_dashboard"] });
        } else {
            setAuth({ token: token, permissions: ["view_profile"] });
        }
    };

    const login = (token, role) => {
        localStorage.setItem("token", token);
        if (role === "Owner") {
            setAuth({ token: token, permissions: ["view_profile", "view_dashboard"] });
            if (1) navigate(location.state?.path || "/admin/dashboard", { replace: true });
            else navigate(location.state?.path || "/admin/stores/add", { replace: true });
        } else {
            setAuth({ token: token, permissions: ["view_profile"] });
            navigate(location.state?.path || "/cashier", { replace: true });
        }
    };

    const logout = async (token) => {
        try {
            const res = await axios.get('/logout', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            localStorage.removeItem("token");
            setAuth({ token: '', permissions: [] });
            navigate(location.state?.path || "/login", { replace: true });
        } catch (err) {
            console.log(err);
        }
    };

    return <AuthContext.Provider value={{ auth, setAuth, setUser, login, logout}}>{children}</AuthContext.Provider>;
};