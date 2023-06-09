import {useEffect, useState} from "react";

export default function Products() {

    const data = [
        {
            barcode: 1,
            name: 'a',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 2,
            name: 'b',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 3,
            name: 'c',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 4,
            name: 'd',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 5,
            name: 'e',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 6,
            name: 'f',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 7,
            name: 'g',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 8,
            name: 'h',
            img: 'https://res.cloudinary.com/dlb5onqd6/image/upload/v1673491430/data/logo_ioru7h.png',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }
    ]
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, [])

    return (
        <>
            <div className="flex items-center justify-between dark:bg-gray-900">
                <h2 className="m-5 text-4xl font-bold text-gray-900 dark:text-white">ទំនិញ</h2>
                <button
                    type="button"
                    className="rounded-lg bg-blue-700 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-50 shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    បន្ថែមទំនិញ
                </button>
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
            <div className="dark:bg-gray-800 dark:border-gray-700">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead
                        className="text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4 rounded-l-lg">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ឈ្មោះ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            តម្លៃ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            បរិមាណ
                        </th>
                        <th scope="col" className="px-6 py-3 rounded-r-lg">
                            សកម្មភាព
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <tr className="border-b hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox"
                                           className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10"
                                     src={item.img} alt={item.name}/>
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{item.name}</div>
                                    <div className="text-xs font-normal text-gray-500">{item.barcode}</div>
                                </div>
                            </th>
                            <td className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="pl-3">
                                    <div className="text-base font-semibold">{item.price}៛</div>
                                    <div className="text-xs font-normal text-gray-500">{item.cost}៛</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {item.quantity}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#"
                                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    កែ
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}