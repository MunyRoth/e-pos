import LineChart from "../../../components/charts/LineChart";

export default function Dashboard() {

    const data = {
        'today': [18, 19, 13, 16, 12, 12],
        'yesterday': [12, 11, 14, 18, 17, 13]
    };
    return (
        <>
            <div className="flex justify-between">
                <h2 className="m-5 text-2xl font-bold text-gray-900 dark:text-white">ផ្ទាំងព័ត៌មាន</h2>

                <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
                    <ul className="flex flex-wrap -mb-px border-b border-gray-200">
                        <li className="mr-2">
                            <a href="#"
                               className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
                        </li>
                        <li className="mr-2">
                            <a href="#"
                               className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                               aria-current="page">Dashboard</a>
                        </li>
                        <li className="mr-2">
                            <a href="#"
                               className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
                        </li>
                        <li className="mr-2">
                            <a href="#"
                               className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
                        </li>
                        <li>
                            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="pt-4 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <LineChart data={data} />
                </div>
                <div className="col-span-2 flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                    <div className="w-full h-full bg-gray-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                    <div
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest
                                Customers</h5>
                            <a href="#"
                               className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Bonnie Green
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Michael Gough
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $67
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Lana Byrd
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $367
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Thomes Lean
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2367
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                    <div
                        className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest
                                Customers</h5>
                            <a href="#"
                               className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                View all
                            </a>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Bonnie Green
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-2.jpg" alt="Michael image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Michael Gough
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $67
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-4.jpg" alt="Lana image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Lana Byrd
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $367
                                        </div>
                                    </div>
                                </li>
                                <li className="pt-3 pb-0 sm:pt-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full"
                                                 src="/docs/images/people/profile-picture-5.jpg" alt="Thomas image"/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                Thomes Lean
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                email@windster.com
                                            </p>
                                        </div>
                                        <div
                                            className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $2367
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}