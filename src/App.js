import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthWrapper from './old/AuthWrapper';
import Cashier from "./old/Cashier";
import Items from "./old/Items";
import Members from "./old/Members";
import Branches from "./old/Branches";
import Database from "./old/Database";
import Profile from "./old/Profile";
import Page404 from "./old/Page404";
import Login from "./old/Login";
import Home from "./old/Home";

import Admin from "./views/admin";
import Dashboard from "./views/admin/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/" element={<Admin />}>
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route element={<AuthWrapper />}>

                    <Route exact path="/cashier" element={<Cashier />} />
                    <Route exact path="/items" element={<Items />} />
                    <Route exact path="/members" element={<Members />} />
                    <Route exact path="/branches" element={<Branches />} />
                    <Route exact path="/database" element={<Database />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Route>

                <Route exact path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
