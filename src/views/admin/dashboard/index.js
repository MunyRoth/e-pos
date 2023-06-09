import LineChart from "../../../components/charts/LineChart";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Dashboard() {

    const data1 = {
        'data': [18, 19, 13, 16, 12, 12]
    };
    const data2 = {
        'data': [11, 12, 13, 14, 15, 16]
    };

    const [data, updateData] = useState([18, 19, 13, 16, 12, 12]);

    const products = [
        {
            name: 'Product A',
            category: '1',
            image: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            quantity: 500
        },
        {
            name: 'Product B',
            category: '1',
            image: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            quantity: 400
        },
        {
            name: 'Product C',
            category: '1',
            image: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            quantity: 300
        },
        {
            name: 'Product D',
            category: '1',
            image: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            quantity: 200
        }
    ]

    const customers = [
        {
            name: 'Customer A',
            phone: '012345678',
            profile: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            order: 500
        },
        {
            name: 'Customer B',
            phone: '012345678',
            profile: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            order: 400
        },
        {
            name: 'Customer C',
            phone: '012345678',
            profile: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            order: 300
        },
        {
            name: 'Customer D',
            phone: '012345678',
            profile: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            order: 200
        },
    ]


    useEffect(() => {
        const interval = setInterval(() => {
            const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
            let array = [...data, val];
            array.shift();
            updateData(array);
            console.log(data);
        }, 1000);

        return () => {
            window.clearInterval(interval); // clear the interval in the cleanup function
        };
    }, [data]); // pass the data as a dependency (because you are using it inside the effect)

    return (
        <>
            <div className="flex justify-between">
                <h2 className="m-5 text-4xl font-bold text-gray-900 dark:text-white">ផ្ទាំងព័ត៌មាន</h2>

                <div className="flex items-center text-xs font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px border-b border-gray-200">
                        <li className="mr-2">
                            <button
                                onClick={() => {

                                }}
                                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                ម្សិលម៉ិញ
                            </button>
                        </li>
                        <li className="mr-2">
                            <Link
                                to="#"
                                className="inline-block p-4 text-main border-b-2 border-main rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                                aria-current="page">
                                ថ្ងៃនេះ
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link to="#"
                                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                សប្តាហ៍នេះ
                            </Link>
                        </li>
                        <li className="mr-2">
                            <Link to="#"
                                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                                ខែនេះ
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 flex items-start h-fit">
                    <div className="flex justify-center w-full pt-4 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <LineChart data={data} title="ចំនួនលក់"/>
                    </div>
                </div>
                <div className="col-span-2 flex items-start row-span-2">
                    <div
                        className="w-full border border-gray-200 rounded-lg shadow sm:px-8 sm:pt-8 sm:pb-4 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                កំពូលផលិតផល
                            </h5>
                            <Link
                                to="top-items"
                                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                មើលទាំងអស់
                            </Link>
                        </div>
                        <div className="flow-root">
                            <ul
                                role="listitem"
                                className="divide-y divide-gray-200 dark:divide-gray-700">

                                {products.map(product => (
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="w-8 h-8 rounded-full"
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {product.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {product.category}
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {product.quantity}
                                            </div>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex items-start row-span-2">
                    <div
                        className="w-full border border-gray-200 rounded-lg shadow sm:px-8 sm:pt-8 sm:pb-4 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                កំពូលអតិថិជន
                            </h5>
                            <Link
                                to="top-customer"
                                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                មើលទាំងអស់
                            </Link>
                        </div>
                        <div className="flow-root">
                            <ul role="listitem" className="divide-y divide-gray-200 dark:divide-gray-700">
                                {customers.map(product => (
                                    <li className="py-3 sm:py-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    className="w-8 h-8 rounded-full"
                                                    src={product.profile}
                                                    alt={product.name}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {product.name}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {product.phone}
                                                </p>
                                            </div>
                                            <div
                                                className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                {product.order}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="w-full py-4 font-bold text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="">
                            <h5>ចំនួនលក់សរុប</h5>
                            <p className="text-main">+1%</p>
                        </div>
                        <p className="text-3xl mt-2">100</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="w-full py-4 font-bold text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="">
                            <h5>ចំនួនប្រាក់សរុប</h5>
                            <p className="text-main">+1%</p>
                        </div>
                        <p className="text-3xl mt-2">1,000,000៛</p>
                    </div>
                </div>
            </div>
        </>
    )
}