import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {
    const navigate = useNavigate();

    const [data, setData] = useState({});
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();

            if (result.status === 200) {
                localStorage.setItem("isLoggedIn", JSON.stringify(true));
                localStorage.setItem("token", result.data.token);

                try {
                    const response = await fetch('http://localhost:8000/api/profile', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            // eslint-disable-next-line no-use-before-define
                            'Authorization': 'Bearer ' + result.data.token
                        }
                    });
                    const user = await response.json();

                    if (user.data.role_id === 1 || user.data.role_id === 2) {
                        if (user.data.stores.length === 0) navigate('/admin/stores/add');
                        else navigate('/admin/dashboard');
                    } else {
                        navigate('/cashier');
                    }
                } catch (error) {
                    setIsError(true);
                    setErrorMessage('error profile');
                }
            } else {
                setIsError(true);
                setErrorMessage(result.message);
            }

        } catch (error) {
            setIsError(true);
            setErrorMessage('error');
        }
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-16 w-auto"
                        src="https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png"
                        alt="ePOS"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        ចុះឈ្មោះចូលគណនីរបស់អ្នក
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                អាសយដ្ឋានអ៊ីម៉ែល
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={e => {
                                        setData({...data, email: e.target.value})
                                        setIsError(false)
                                    }}

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    ពាក្យសំងាត់
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        ភ្លេចពាក្យសំងាត់?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    onChange={e => {
                                        setData({...data, password: e.target.value})
                                        setIsError(false)
                                    }}

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {isError?<p className="text-sm font-medium leading-6 text-red-900">{errorMessage}</p>:null}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                ចូល
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}