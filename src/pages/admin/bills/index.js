import {useEffect, useState} from 'react';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

export default function Items() {
    const axiosPrivate = useAxiosPrivate();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getItems = async  () => {
            const res = await axiosPrivate.get('/bills', {
                signal: controller.signal
            });
            isMounted && setItems(res.data.data);
            res.data.data.length === 0 && setIsEmpty(true);
            console.log(res.data.data)
        }

        getItems()
            .then(() => console.log("success"))
            .catch(() => console.log("fail"))
            .finally(() => {
                setIsLoading(false);
            });

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

    return (
        <>
            <div className="flex items-center justify-between dark:bg-gray-900">
                <h2 className="m-5 text-4xl font-bold text-gray-900 dark:text-white">វិក្កយប័ត្រ</h2>
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
                           placeholder="ស្វែងរក"/>
                </div>
            </div>
            <div className="dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                        វិក្កយប័ត្រ
                    </h5>
                </div>
                <div className="flow-root">
                    <ul role="listitem" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {items.map(product => (
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            #{product.id}
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            អ្នកទិញ {product.purchased_by}
                                        </p>
                                    </div>
                                    <div
                                        className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        {/*{product.order}*/}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}