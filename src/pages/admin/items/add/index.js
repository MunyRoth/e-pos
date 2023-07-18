import {useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

export default function AddItem() {

    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();

    const errRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
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
        setIsLoading(true);

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
            isMounted && navigate(location.state?.path || "/admin/items/stock_in", { replace: true });
        } catch (err) {
            setIsLoading(false);
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
                            {isLoading
                                ? <button disabled type="button"
                                          className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 dark:bg-blue-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                                    <svg aria-hidden="true" role="status"
                                         className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor"/>
                                    </svg>
                                    កំពុងផ្ទុក...
                                </button>
                                : <button
                                    type="submit"
                                    className="w-full flex items-center justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    បន្ថែមទំនិញ
                                </button>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}