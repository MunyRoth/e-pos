import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import useAuth from "../../../../hooks/useAuth";
import axios from "../../../../api/axios";

export default function AddStore() {

    const navigate = useNavigate();
    const location = useLocation();

    const { auth } = useAuth();

    const errRef = useRef();

    const [formData, setFormData] = useState({
        name_km: "",
        address_km: ""
    });
    const [errMsg, setErrMsg] = useState('');

    const handleChange = e => {
        const {name, value, type, checked} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await axios.post('/stores', JSON.stringify(formData),
                {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${auth.token}`,
                        'Content-Type': 'application/json'
                    }
                });
            Cookies.set('storeId', res.data.data.id, { expires: 15 });
            navigate(location.state?.path || "/admin/dashboard", { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 422) {
                setErrMsg('Validation Fail');
            } else {
                setErrMsg('Failed');
            }
            errRef.current.focus();
        }
    }

    useEffect(() => {
        setErrMsg('');
    }, [formData])

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        បន្ថែមហាង
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/*<div>*/}
                        {/*    <label className="block text-sm font-medium leading-6 text-gray-900">*/}
                        {/*        រូបហាង*/}
                        {/*    </label>*/}
                        {/*    <div className="mt-2">*/}
                        {/*        <input*/}
                        {/*            className="block w-full rounded-md border text-gray-900 text-sm border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"*/}
                        {/*            aria-describedby="file_input_help"*/}
                        {/*            type="file"*/}
                        {/*            onChange={e => {*/}
                        {/*                    this.setState({logo: e.target.files[0]});*/}
                        {/*                }*/}
                        {/*            }*/}
                        {/*        />*/}
                        {/*        <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">*/}
                        {/*            PNG or JPG (MAX. 800x400px).*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                ឈ្មោះហាង
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name_km"
                                    name="name_km"
                                    type="text"
                                    autoComplete="false"
                                    value={formData.name_km}
                                    onChange={handleChange}
                                    required

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    អាសយដ្ឋាន
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="address_km"
                                    name="address_km"
                                    type="text"
                                    autoComplete="false"
                                    value={formData.address_km}
                                    onChange={handleChange}
                                    required

                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <p
                            ref={errRef}
                            className={errMsg ? "text-sm font-medium leading-6 text-red-900" : "hidden"}
                            aria-live="assertive"
                        >
                            {errMsg}
                        </p>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                បន្ថែមហាង
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}