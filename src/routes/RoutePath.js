import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthWrapper from "../pages/AuthWrapper";
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

const RoutePath = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="test" element={<Authentication>Authentication</Authentication>} />
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
    )
}

export default RoutePath;