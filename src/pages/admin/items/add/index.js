import {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

export default function AddItem() {

    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();

    const errRef = useRef();

    const [formData, setFormData] = useState({
        store_id: Cookies.get('storeId'),
        UPC: "",
        name: ""
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

        // Create an object of formData
        // const data = new FormData();
        //
        // data.append(
        //     "store_id",
        //     1,
        // );
        // data.append(
        //     "UPC",
        //     e.target.value.UPC
        // );
        // data.append(
        //     "name",
        //     e.target.value.name,
        // );

        let isMounted = true;
        const controller = new AbortController();

        try {
            const res = await axiosPrivate.post('/items', formData , {
                signal: controller.signal
            });
            isMounted && navigate(location.state?.path || "/admin/items", { replace: true });
        } catch (err) {

        }
    }

        return (
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            បន្ថែមទំនិញ
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* eslint-disable-next-line no-undef */}
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    ឈ្មោះទំនិញ
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="false"
                                        value={formData.name}
                                        onChange={handleChange}

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        UPC
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="UPC"
                                        name="UPC"
                                        autoComplete="false"
                                        value={formData.UPC}
                                        onChange={handleChange}

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    បន្ថែមទំនិញ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )

}