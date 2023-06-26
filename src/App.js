import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Items from "./old/Items";
import Branches from "./old/Branches";
import Database from "./old/Database";
import Profile from "./old/Profile";
import Page404 from "./old/Page404";
import Login from "./old/Login";

import AuthWrapper from './auth/AuthWrapper';

import Home from "./views/home";
import Admin from "./views/admin";
import Dashboard from "./views/admin/dashboard";
import Products from "./views/admin/products";
import Bills from "./views/admin/bills";
import Invoices from "./views/admin/invoices";
import Members from "./views/admin/members";

import Cashier from "./views/cashier";

function App() {
    return (
        <BrowserRouter>
            <Routes>    

                <Route path="/admin/" element={<Admin />}>
                    <Route exact path="dashboard" element={<Dashboard />} />
                    <Route exact path="products" element={<Products />} />
                    <Route exact path="bills" element={<Bills />} />
                    <Route exact path="invoices" element={<Invoices />} />
                    <Route exact path="members" element={<Members />} />
                    <Route exact path="branches" element={<Branches />} />
                </Route>
                <Route path="/" element={<AuthWrapper />}>
                    <Route exact path="cashier" element={<Cashier />} />
                    <Route exact path="items" element={<Items />} />

                    <Route exact path="database" element={<Database />} />
                    <Route exact path="profile" element={<Profile />} />
                </Route>

                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
