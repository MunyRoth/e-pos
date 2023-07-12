import {BrowserRouter, Route, Routes} from "react-router-dom";
import Admin from "../pages/admin";
import Dashboard from "../pages/admin/dashboard";
import Items from "../pages/admin/items";
import AddItem from "../pages/admin/items/add";
import Bills from "../pages/admin/bills";
import Invoices from "../pages/admin/invoices";
import Members from "../pages/admin/members";
import Branches from "../pages/admin/branches";
import AddStore from "../pages/admin/stores/add";
import Home from "../pages/home";
import Cashier from "../pages/cashier";
import Profile from "../pages/profile";
import Login from "../pages/Login";
import SignOut from "../pages/SignOut";
import Page404 from "../pages/Page404";
import Authentication from "../features/auth/authentication/Authentication";
import Authorization from "../features/auth/authorization/Authorization";
import PERMISSIONS from "../features/auth/permissions/Permissions";
import {AuthProvider} from "../features/auth/AuthProvider";
import React from "react";
import User from '../components/User'

const RoutePath = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route element={<Authentication />}>
                        <Route path="/admin/" element={<Admin />}>
                            <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_DASHBOARD]} />}>
                                <Route exact path="dashboard" element={<Dashboard />} />
                            </Route>
                            <Route exact path="items" element={<Items />} />
                            <Route exact path="items/add" element={<AddItem />} />
                            <Route exact path="bills" element={<Bills />} />
                            <Route exact path="invoices" element={<Invoices />} />
                            <Route exact path="members" element={<Members />} />
                            <Route exact path="branches" element={<Branches />} />
                            <Route exact path="stores/add" element={<AddStore />} />
                        </Route>

                        <Route path="/" element={<Home />}>
                            <Route exact path="cashier" element={<Cashier />} />
                            <Route exact path="profile" element={<Profile />} />
                            <Route exact path="signout" element={<SignOut />} />
                            <Route exact path="user" element={<User />} />
                        </Route>
                    </Route>

                    <Route exact path="/login" element={<Login />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default RoutePath;