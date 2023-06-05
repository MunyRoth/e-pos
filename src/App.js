import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AuthWrapper from './components/AuthWrapper';
import Cashier from "./components/Cashier";
import Items from "./components/Items";
import Members from "./components/Members";
import Branches from "./components/Branches";
import Database from "./components/Database";
import Profile from "./components/Profile";
import Page404 from "./components/Page404";
import Login from "./components/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthWrapper />}>
                    <Route exact path="/" element={<Cashier/>} />
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
