import LineChart from "../../../components/charts/LineChart";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Dashboard() {

    const data1 = [11, 12, 13, 14, 15, 16];
    const data2 = [18, 11, 12, 17, 10, 12];
    const data3 = [13, 15, 11, 16, 17, 12];
    const data4 = [15, 11, 15, 19, 16, 13];

    const [data, updateData] = useState([18, 19, 13, 16, 11, 12]);
    const [x, updateX] = useState(['6:00AM', '9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM']);
    const [y, updateY] = useState({
        min: 0,
        max: 20
    });

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
        },
        {
            name: 'Product E',
            category: '1',
            image: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            quantity: 200
        },
        {
            name: 'Product F',
            category: '1',
            image: "https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png",
            quantity: 200
        },
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

    const [activeTab, setActiveTab] = useState(2);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // useEffect(() => {

    // }, [data]);

    return (
        <>
            <div className="flex justify-between">
                <h2 className="m-5 text-4xl font-bold text-gray-900 dark:text-white">ផ្ទាំងព័ត៌មាន</h2>

                <div className="flex items-center text-xs font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px border-b border-gray-200">
                        <li className="mr-2">
                            <button
                                onClick={() => {
                                    updateData(data1);
                                    setActiveTab(1);
                                }}
                                className={classNames((activeTab == 1) ? 'text-main border-main rounded-t-lg active dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300', 'inline-block p-4 border-b-2 rounded-t-lg')}
                            >
                                ម្សិលម៉ិញ
                            </button>
                        </li>
                        <li className="mr-2">
                            <button
                                onClick={() => {
                                    updateData(data2);
                                    setActiveTab(2);
                                }}
                                className={classNames((activeTab == 2) ? 'text-main border-main rounded-t-lg active dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300', 'inline-block p-4 border-b-2 rounded-t-lg')}
                            >
                                ថ្ងៃនេះ
                            </button>
                        </li>
                        <li className="mr-2">
                            <button
                             onClick={() => {
                                updateData(data3);
                                setActiveTab(3);
                             }}
                             className={classNames((activeTab == 3) ? 'text-main border-main rounded-t-lg active dark:text-blue-500 dark:border-blue-500bg-gray-100' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300', 'inline-block p-4 border-b-2 rounded-t-lg')}
                             >
                                សប្តាហ៍នេះ
                            </button>
                        </li>
                        <li className="mr-2">
                            <button
                             onClick={() => {
                                updateData(data4);
                                setActiveTab(4);
                             }}
                             className={classNames((activeTab == 4) ? 'text-main border-main rounded-t-lg active dark:text-blue-500 dark:border-blue-500' : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300', 'inline-block p-4 border-b-2 rounded-t-lg')}
                             >
                                ខែនេះ
                            </button>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 flex items-start h-full">
                    <div className="flex flex-col justify-between w-full h-full border border-gray-200 rounded-lg shadow sm:pt-4 sm:px-4 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
                            ចំនួនលក់
                            </h5>
                        </div>
                        <LineChart
                            data={data}
                            x={x}
                            y={y} title="ចំនួនលក់"/>
                    </div>
                </div>
                <div className="col-span-2 flex items-start row-span-2">
                    <div
                        className="w-full h-full border border-gray-200 rounded-lg shadow sm:pt-4 sm:px-4 sm:pb-2 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
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
                        className="w-full h-full border border-gray-200 rounded-lg shadow sm:pt-4 sm:px-4 sm:pb-2 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
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
                <div className="h-full">
                    <div className="w-full h-full py-4 font-bold text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="">
                            <h5 className="text-lg">ចំនួនលក់សរុប</h5>
                            <p className="text-main">+1%</p>
                        </div>
                        <p className="text-3xl mt-2">100</p>
                    </div>
                </div>
                <div className="h-full">
                    <div className="w-full h-full py-4 font-bold text-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="">
                            <h5 className="text-lg">ចំនួនប្រាក់សរុប</h5>
                            <p className="text-main">+1%</p>
                        </div>
                        <p className="text-3xl mt-2">1,000,000៛</p>
                    </div>
                </div>
            </div>
        </>
    )
}