import {useEffect, useState} from "react";

export default function Profile() {

    let token = localStorage.getItem('token');
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [email, setEmail] = useState('');
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
            setEmail(data.data.email);

        } catch (error) {
        }
    }

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <div className="p-4">
            <div className="p-4">
                <h3 className="text-base font-semibold leading-7 text-gray-900">ព័ត៌មានទូទៅ</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">ព័ត៌មានអ្នកប្រើប្រាស់</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">ឈ្មោះ</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{name}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">តួនាទី</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{role}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">អាសយដ្ឋានអ៊ីម៉ែល</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{email}</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
