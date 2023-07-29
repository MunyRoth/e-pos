import {useEffect, useState} from 'react';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Cookies from "js-cookie";

export default function Items() {
    const axiosPrivate = useAxiosPrivate();

    const [bills, setBills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const getBillDetail = (billId) => {
        let isMounted = true;
        const controller = new AbortController();

        const getItems = async  () => {
            const res = await axiosPrivate.get('/bills/'+billId, {
                signal: controller.signal
            });
            isMounted && console.log(res.data.data);
        }

        getItems()
            .then(() => console.log("1"))
            .catch(() => console.log("0"))
            .finally(() => {

            });
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getItems = async  () => {
            const res = await axiosPrivate.get('/bills/store/'+Cookies.get('storeId'), {
                signal: controller.signal
            });
            isMounted && setBills(res.data.data);
            res.data.data.length === 0 && setIsEmpty(true);
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
        <div className="relative flex flex-col h-full">
            <div className="h-10 mb-4 flex items-center justify-between dark:bg-gray-900">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">វិក្កយប័ត្រ</h2>
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
            <div className="flex-1 flex space-x-4">
                <div className="w-3/6 flex flex-col border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                            វិក្កយប័ត្រទាំងអស់
                        </h5>
                    </div>
                    <div className="flex-1">
                        <ul role="listitem" className="h-full flex flex-col space-y-4 overflow-y-scroll no-scrollbar">
                            {bills.map(bill => (
                                <li
                                    className="border border-gray-200 rounded-lg p-4 flow-root hover:bg-gray-100"

                                    onClick={() => getBillDetail(bill.id)}
                                >
                                    <div className="w-full flex items-center">
                                        <div className="text-base flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                លេខវិក្កយបត្រ #{bill.id}
                                            </p>
                                            <p className="text-gray-500 truncate dark:text-gray-400">
                                                អ្នកទិញ {bill.purchased_by}
                                            </p>
                                        </div>
                                        <div
                                            className="text-end text-base font-semibold text-gray-900 truncate dark:text-white">
                                            <p>
                                                ទំនិញសរុប {bill.total_item}
                                            </p>
                                            <p className="text-2xl">
                                                {bill.total_price}៛
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-3/6 border border-gray-200 rounded-lg shadow sm:pt-4 sm:px-4 sm:pb-2 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                        លម្អិតវិក្កយបត្រ
                    </h5>
                </div>
            </div>

        </div>
    )
}