import axios from "axios";
import React, { Component } from 'react';
import {Navigate} from "react-router-dom";

class AddItem extends Component {

    state = {
        token: localStorage.getItem('token'),
        status: 0,

        store_id: localStorage.getItem('storeId'),
        UPC: null,
        name: null
    };

    handleSubmit = async e => {
        e.preventDefault();

        // Create an object of formData
        const data = new FormData();

        data.append(
            "store_id",
            this.state.store_id,
        );
        data.append(
            "UPC",
            this.state.UPC,
        );
        data.append(
            "name",
            this.state.name,
        );

        // make a POST request to the File Upload API with the FormData object and Rapid API headers
        axios
            .post("http://localhost:8000/api/items", data, {
                headers: {
                    'Authorization': 'Bearer ' + this.state.token,
                    'Content-Type': 'multipart/form-data'
                },
            })
            .then((response) => {
                // handle the response
                this.setState({status: response.data.status});
            })
            .catch((error) => {
                // handle errors
            });
    }

    render() {
        if (this.state.status === 201) {
            return (
                <Navigate to="/admin/items" />
            );
        }
        return (
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            បន្ថែមទំនិញ
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* eslint-disable-next-line no-undef */}
                        <form className="space-y-6" onSubmit={this.handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    ឈ្មោះទំនិញ
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        onChange={e => {
                                            this.setState({name: e.target.value});
                                        }}

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        UPC
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        onChange={e => {
                                            this.setState({UPC: parseInt(e.target.value)});
                                        }}

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    បន្ថែមទំនិញ
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default AddItem;