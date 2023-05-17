import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <section className="py-4 sticky top-0 z-50 bg-white shadow">
            <nav className="my-container navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/'><span className="text-2xl font-bold"><span className="text-red-500">Job</span>Portal</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 font-medium">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-red-500" : ''}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/allJobs' className={({ isActive }) => isActive ? "text-red-500" : ''}>All Jobs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blog' className={({ isActive }) => isActive ? "text-red-500" : ''}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/appliedJob' className={({ isActive }) => isActive ? "text-red-500" : ''}>Applied Job</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-red-500" : ''}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-red-500" : ''}>Sign in</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/postJob'>  <button className="my-btn ">Post a Job</button></Link>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;