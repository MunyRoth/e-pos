import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import AuthWrapper from './auth/AuthWrapper';
import Login from "./auth/Login";
import SignOut from "./auth/SignOut";

import Admin from "./views/admin";
import Dashboard from "./views/admin/dashboard";
import Items from "./views/admin/items";
import AddItem from "./views/admin/items/add";
import Bills from "./views/admin/bills";
import Invoices from "./views/admin/invoices";
import Members from "./views/admin/members";
import Branches from "./views/admin/branches";
import AddStore from "./views/admin/stores/add"

import Cashier from "./views/cashier";
import Home from "./views/home";
import Profile from "./views/profile";

import Page404 from "./components/Page404";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AuthWrapper />}>
                    <Route path="/admin/" element={<Admin />}>
                        <Route exact path="dashboard" element={<Dashboard />} />
                        <Route exact path="items" element={<Items />} />
                        <Route exact path="items/add" element={<AddItem />} />
                        <Route exact path="bills" element={<Bills />} />
                        <Route exact path="invoices" element={<Invoices />} />
                        <Route exact path="members" element={<Members />} />
                        <Route exact path="branches" element={<Branches />} />
                        <Route exact path="stores/add" element={<AddStore />} />
                    </Route>

                    <Route path="/" element={<Home />}>
                        <Route exact path="/cashier" element={<Cashier />} />
                        <Route exact path="/profile" element={<Profile />} />
                    </Route>
                </Route>

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signout" element={<SignOut />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
