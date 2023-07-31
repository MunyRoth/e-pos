import {useEffect, useState} from 'react';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import Cookies from "js-cookie";

export default function Items() {
    const axiosPrivate = useAxiosPrivate();

    const [bills, setBills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    const [bill, setBill] = useState(null);

    const getBillDetail = (billId) => {
        const controller = new AbortController();
        const getItems = async  () => {
            const res = await axiosPrivate.get('/bills/'+billId, {
                signal: controller.signal
            });
            console.log(res.data.data);
            setBill(res.data.data);
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
        setIsLoading(true);
        const getItems = async  () => {
            const res = await axiosPrivate.get('/bills/store/'+Cookies.get('storeId'), {
                signal: controller.signal
            });
            isMounted && setBills(res.data.data);
            res.data.data.length === 0 && setIsEmpty(true);
        }

        getItems()
            .then(() => setIsLoading(false))
            .catch(() => console.log("fail"))
            .finally(() => {

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
                            {isLoading
                            ? <li
                                    className="p-3 border border-gray-200 rounded-lg flow-root hover:bg-gray-100"

                                    onClick={() => getBillDetail(bill.id)}
                                >
                                    <div className="pl-3" role="status">
                                        <svg aria-hidden="true"
                                             className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-main"
                                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"/>
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"/>
                                        </svg>
                                        <span className="">កំពុងផ្ទុក...</span>
                                    </div>
                                </li>
                            : bills.map(bill => (
                                    <li
                                        className="p-3 border border-gray-200 rounded-lg flow-root hover:bg-gray-100"

                                        onClick={() => getBillDetail(bill.id)}
                                    >
                                        <div className="w-full flex items-center">
                                            <div className="text-base flex-1 min-w-0">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    លេខវិក្កយបត្រ #{bill.id}
                                                </p>
                                                <p className="text-gray-500 truncate dark:text-gray-400">
                                                    អ្នកចេញវិក្កយបត្រ: {bill.purchased_by}
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
                <div className="w-3/6 border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                            លម្អិតវិក្កយបត្រ
                        </h5>
                        {(bill !== null)
                        ? <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                                អ្នកចេញវិក្កយបត្រ: {bill.purchased_by?.name}
                            </h5>
                        : <div></div>}
                    </div>
                    <div className="flex-1">
                        <ul role="listitem" className="h-full flex flex-col space-y-4 overflow-y-scroll no-scrollbar">
                            {(bill !== null) ? bill.bill_details?.map(item => (
                                    <li className="p-3 border border-gray-200 rounded-lg flow-root dark:bg-gray-800 dark:border-gray-700">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="w-20 h-20"
                                                    src={item.item.image_url}
                                                    alt={item.item.name} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    {item.item.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {item.item.UPC}
                                                </p>
                                                <div className="flex justify-between items-end">
                                                    <div className="flex">
                                                        <div className="relative rounded-md mr-2 text-red-500">
                                                            ទិញ {item.item_cost}៛
                                                        </div>
                                                        <div className="relative rounded-md text-main">
                                                            លក់ {item.item_price}៛
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        បរិមាណ {item.item_quantity}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            ) : <div></div>}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}