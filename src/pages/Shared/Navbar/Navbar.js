import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })

    }



    const MenuItems = <React.Fragment>
        <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
            <Link to="/">Home</Link>
        </li>
        <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
            <Link to="/about">About</Link>
        </li>
        <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
            <Link to="/appointment">Appointment</Link>
        </li>
        <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
            <Link to="/reviews">Reviews</Link>
        </li>
        <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
            <Link to="/contact">Contact</Link>
        </li>
        {user?.uid ?
            <>
                <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
                    <Link to="/dashboard">Dashboard</Link></li>
                <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
                    <Link onClick={handleSignOut} >Sign Out</Link></li>
            </>
            : <li className="text-md font-medium hover:bg-accent hover:text-white hover:rounded-lg">
                <Link to="/login">Login</Link></li>
        }

    </React.Fragment>
        ;
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {MenuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {MenuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;