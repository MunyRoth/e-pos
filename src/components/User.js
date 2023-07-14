import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../hooks/useAuth";

const User = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    let token = localStorage.getItem("token");

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUser = async  () => {
            try {
                const res = await axios.get('/profile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                console.log(res.data);
                isMounted && login(token, res.data.data.role.name_en)
            } catch (err) {
                console.log(err);
                navigate('/login', {state: {from: location}, replace: true});
            }
        }

        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

    return (
        <></>
    )
}

export default User;