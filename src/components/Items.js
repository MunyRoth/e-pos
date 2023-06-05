import Navbar from "./Navbar";
import {useEffect, useState} from "react";

export default function Items() {

    const data = [
        {
            barcode: 1,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 2,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 3,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 4,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 5,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 6,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 7,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }, {
            barcode: 8,
            name: 'a',
            price: 100,
            cost: 100,
            discount: 10,
            tax: 10,
            quantity: 2,
            addedBy: 'roth'
        }
    ]
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(data);
        console.log(1);
    }, [])
    return (
        <div>
            <Navbar />
            <div className="relative mx-4 mt-4 overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            លេខរៀង
                        </th>
                        <th scope="col" className="px-6 py-3">
                            បារកូដ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ឈ្មោះ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            តម្លៃទិញ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            តម្លៃលក់
                        </th>
                        <th scope="col" className="px-6 py-3">
                            បញ្ចុះតម្លៃ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ពន្ធ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            បរិមាណ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            សកម្មភាព
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.length ?
                            (
                                products.map((product, index) =>
                                    {
                                        return (
                                            <tr className="dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {index+1}
                                                </th>
                                                <td
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.barcode}
                                                </td>
                                                <td
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.name}
                                                </td>
                                                <td
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.cost}
                                                </td>
                                                <td
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.price}
                                                </td>
                                                <td
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.discount}
                                                </td>
                                                <td
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.tax}
                                                </td>
                                                <td
                                                    className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                                    {product.quantity}
                                                </td>
                                                <td className="py-4 text-gray-900">
                                                    <button className="text-red-500">
                                                        លុប
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            ) : (
                                <div className="text-center dark:bg-gray-800 h-24">
                                    <div>មិនមានទំនិញ</div>
                                </div>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}