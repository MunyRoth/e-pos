import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

export default function Products() {
    const axiosPrivate = useAxiosPrivate();

    const [items, setItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUser = async  () => {
            try {
                const res = await axiosPrivate.get('/items/'+Cookies.get('storeId'), {
                    signal: controller.signal
                });
                isMounted && setItems(res.data.data);
                setIsLoading(false);
            } catch (err) {

            }
        }

        getUser();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

    return (
        <>
            <div className="flex items-center justify-between dark:bg-gray-900">
                <h2 className="m-5 text-4xl font-bold text-gray-900 dark:text-white">ទំនិញ</h2>
                <Link
                    to="add"
                    type="button"
                    className="rounded-lg bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    បន្ថែមទំនិញ
                </Link>
                <label htmlFor="table-search" className="sr-only">ស្វែងរក</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" id="table-search-users"
                           className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="ស្វែងរកទំនិញដោយបារកូដ"/>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <div className="grid grid-cols-4 gap-4">
                        {isLoading
                            ? <></>
                            : items.map(item => (
                                    <div
                                        className="w-48 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <img className="p-5 rounded-t-lg"
                                             src={item.image_url}
                                             alt={item.name}
                                        />
                                        <div className="px-3 pb-3">
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                {item.name}
                                            </h5>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                                                <button
                                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    បន្ថែម
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                    </div>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {isLoading
                            ? <></>
                            : items.map(item => (
                                    <li className="mb-3 p-3 w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="w-16 h-16"
                                                    src={item.image_url}
                                                    alt={item.name} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {item.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {item.UPC}
                                                </p>
                                                <div className="flex justify-between">
                                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                        {item.price}
                                                    </p>
                                                    <div className="flex">
                                                        <div>
                                                            <button type="button"
                                                                    className="px-3 py-2 text-xs font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                                -
                                                            </button>
                                                        </div>
                                                        <div>
                                                            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900"></label>
                                                            <div className="relative rounded-md shadow-sm">
                                                                <input
                                                                    type="text"
                                                                    name="quantity"
                                                                    id="quantity"
                                                                    className="w-12 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                    placeholder="0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button type="button"
                                                                    className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                +
                                                            </button>
                                                        </div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            )}
                    </ul>
                </div>
            </div>
        </>
    )
}