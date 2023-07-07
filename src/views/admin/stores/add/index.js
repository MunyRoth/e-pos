import axios from "axios";
import React, { Component } from 'react';

class Login extends Component {

    state = {
        token: localStorage.getItem('token'),
        selectedFile: null,
        name_km: null,
        address_km: null
    };

    handleSubmit = async e => {
        e.preventDefault();

        // Create an object of formData
        const data = new FormData();

        // Update the formData object
        data.append(
            "logo",
            this.state.selectedFile,
        );
        data.append(
            "name_km",
            this.state.name_km,
        );
        data.append(
            "address_km",
            this.state.address_km,
        );

        // make a POST request to the File Upload API with the FormData object and Rapid API headers
        axios
            .post("http://localhost:8000/api/stores", data, {
                headers: {
                    'Authorization': 'Bearer ' + this.state.token,
                    'Content-Type': 'multipart/form-data'
                },
            })
            .then((response) => {
                // handle the response
                console.log(response);
            })
            .catch((error) => {
                // handle errors
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            បន្ថែមហាង
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {/* eslint-disable-next-line no-undef */}
                        <form className="space-y-6" onSubmit={this.handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    រូបហាង
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="block w-full rounded-md border text-gray-900 text-sm border-gray-300 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                        aria-describedby="file_input_help"
                                        type="file"
                                        onChange={e => {
                                                this.setState({logo: e.target.files[0]});
                                            }
                                        }
                                    />
                                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-300">
                                        PNG or JPG (MAX. 800x400px).
                                    </p>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    ឈ្មោះហាង
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        onChange={e => {
                                            this.setState({name_km: e.target.value});
                                        }}

                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        អាសយដ្ឋាន
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        onChange={e => {
                                            this.setState({address_km: e.target.value});
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
                                    បន្ថែមហាង
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;