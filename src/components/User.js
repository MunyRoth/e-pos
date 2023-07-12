import {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const User = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUser = async  () => {
            try {
                const res = await axiosPrivate.get('/profile', {
                    signal: controller.signal
                });
                console.log(res.data);
                isMounted && setUser(res.data)
            } catch (err) {
                console.log(err);
                // navigate('/login', {state: {from: location}, replace: true});
            }
        }

        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

    return (
        <article>
            <h1>User</h1>
            {user
                ? (<p>{user.username}</p>)
                : (<p>no user</p>)
            }
        </article>
    )
}

export default User;