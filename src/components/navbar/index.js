import {Fragment, useEffect, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {Link} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    let token = localStorage.getItem('token');
    let store = localStorage.getItem('storeName');

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [role, setRole] = useState('');

    const getProfile = async e => {
        try {
            const response = await fetch('http://localhost:8000/api/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // eslint-disable-next-line no-use-before-define
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();

            setName(data.data.name);
            setAvatar(data.data.avatar);
            setRole(data.data.role.name_km);

        } catch (error) {
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <Disclosure as="nav" className="px-4 border-b-2 dark:bg-gray-800">
            {({ open }) => (
                <>
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text"
                                   className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-main focus:border-main dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                                   placeholder="ស្វែងរក"/>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                {store}
                            </div>
                        </div>

                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="text-start p-1 flex rounded-lg text-sm hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-200">

                                    <div className="flex items-center space-x-4">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={avatar}
                                            alt="profile"
                                        />
                                        <div className="font-medium dark:text-white">
                                            <div>{name}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {role}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="sr-only">Open user menu</span>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/profile"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                គណនី
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                to="/signout"
                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                            >
                                                ចាកចេញ
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
