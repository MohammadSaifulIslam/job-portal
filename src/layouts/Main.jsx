import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <ScrollRestoration />
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;