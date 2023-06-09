import { Toaster } from "react-hot-toast";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <div>
                <ScrollRestoration />
                <Outlet />
            </div>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Main;