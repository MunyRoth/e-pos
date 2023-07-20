import {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

export default function StockIn() {

    const navigate = useNavigate();
    const location = useLocation();
    const axiosPrivate = useAxiosPrivate();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoadingOnPay, setIsLoadingOnPay] = useState(false);

    const [itemsProcessing, setItemsProcessing] = useState([]);

    const handleAddItem = item => {
        const itemExist = itemsProcessing.find(i => i.id === item.id);

        if (itemExist) {
            setItemsProcessing(
                itemsProcessing.map(i =>
                    i.id === item.id
                        ? {...itemExist, quantity: itemExist.quantity + 1}
                        : i
                )
            );
        } else {
            setItemsProcessing([...itemsProcessing, {...item, quantity: 1}]);
        }
    }

    const handleChange = (e, item) => {
        const {name, value} = e.target;
        const itemExist = itemsProcessing.find(i => i.id === item.id);
        setItemsProcessing(
            itemsProcessing.map(i =>
                i.id === item.id
                    ? {...itemExist, [name]: parseInt(value)}
                    : i
            )
        );
    }

    const handleSubtractOne = item => {
        const itemExist = itemsProcessing.find(i => i.id === item.id);
        setItemsProcessing(
            itemsProcessing.map(i =>
                i.id === item.id
                    ? {...itemExist, quantity: itemExist.quantity - 1}
                    : i
            )
        );
    }
    const handleAddOne = item => {
        const itemExist = itemsProcessing.find(i => i.id === item.id);
        setItemsProcessing(
            itemsProcessing.map(i =>
                i.id === item.id
                    ? {...itemExist, quantity: itemExist.quantity + 1}
                    : i
            )
        );
    }

    const handlePayNow = async e => {
        e.preventDefault();
        setIsLoadingOnPay(true);

        let isMounted = true;
        const controller = new AbortController();

        try {
            const res = await axiosPrivate.post('/stock_in',
                {
                    items: itemsProcessing
                },
                {
                    signal: controller.signal
                });
            isMounted && navigate(location.state?.path || "/admin/items", { replace: true });
        } catch (err) {
            setIsLoadingOnPay(false);
        }
    }

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getItems = async  () => {
            try {
                const res = await axiosPrivate.get('/items/store/'+Cookies.get('storeId'), {
                    signal: controller.signal
                });
                isMounted && setItems(res.data.data);
                res.data.data.length === 0 && setIsEmpty(true);
                setIsLoading(false);
            } catch (err) {

            }
        }

        getItems();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, []);

    return (
        <>
            <div className="flex items-center justify-between dark:bg-gray-900">
                <nav className="flex my-5" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1">
                        <li className="inline-flex items-center">
                            <Link
                                to='/admin/items'
                                className="ml-5 text-xl font-bold text-gray-900 dark:text-white"
                            >
                                ទំនិញ
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">បន្ថែមទំនិញចូលស្តុក</h2>
                            </div>
                        </li>
                    </ol>
                </nav>
                <Link
                    to="add"
                    type="button"
                    className="rounded-lg bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    បន្ថែមទំនិញថ្មី
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
                            ? <>កំពុងផ្ទុក...</>
                            : isEmpty
                                ? <>មិនមានទំនិញ</>
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
                                                        onClick={() => handleAddItem(item)}
                                                        className="text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:outline-none active:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
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
                        {itemsProcessing.map(item => (
                                <li className="mb-3 p-3 w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-16 h-16"
                                                src={item.image_url}
                                                alt={item.name} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                {item.UPC}
                                            </p>
                                            <div className="flex justify-between items-end">
                                                <div className="flex">
                                                    <div className="relative rounded-md shadow-sm mr-2">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                                            <span className="text-gray-500 sm:text-sm">$</span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="cost"
                                                            id="cost"
                                                            className="w-16 h-7 rounded-md border-0 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder={item.cost}

                                                            onChange={e => handleChange(e, item)}
                                                        />
                                                    </div>
                                                    <div className="relative rounded-md shadow-sm">
                                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                                            <span className="text-gray-500 sm:text-sm">$</span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="price"
                                                            id="price"
                                                            className="w-16 h-7 rounded-md border-0 pl-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                            placeholder={item.price}

                                                            onChange={e => handleChange(e, item)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 flex items-center">
                                                            <button type="button"
                                                                    className="w-7 h-7 text-xs font-medium text-center text-gray-900 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"

                                                                    onClick={() => {
                                                                        if (item.quantity > 1) handleSubtractOne(item)
                                                                    }}>
                                                                -
                                                            </button>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            id="quantity"
                                                            value={item.quantity}
                                                            className="text-center w-20 h-7 px-8 text-xs bg-gray-100 rounded-full border-0 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-300"

                                                            onChange={e => handleChange(e, item)}
                                                        />
                                                        <div className="absolute inset-y-0 right-0 flex items-center">
                                                            <button type="button"
                                                                    className="w-7 h-7 text-xs font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                                                                    onClick={() => handleAddOne(item)}>
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        )}
                    </ul>
                    {isLoadingOnPay
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
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 active:ring-4 active:outline-none active:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                            onClick={handlePayNow}
                        >
                            បង់ឥឡូវ
                        </button>
                    }
                </div>
            </div>
        </>
    )
}