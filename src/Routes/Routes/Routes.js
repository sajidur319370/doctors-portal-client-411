import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Appointment from "../../pages/Appointment/Appointment/Appointment";
import Contact from "../../pages/Home/Contact/Contact";
import About from "../../pages/About/About";
import Reviews from "../../pages/Reviews/Reviews";
import SignUp from "../../pages/SignUp/SignUp";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRouts/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout";
import MyApointments from "../../pages/Dashboard/MyAppointments/MyApointments";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },

            {
                path: '/appointment',
                element: <Appointment></Appointment>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyApointments></MyApointments>

            }
        ]

    }
]);

export default router;