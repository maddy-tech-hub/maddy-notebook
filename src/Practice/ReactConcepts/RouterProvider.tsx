import {
    createBrowserRouter,
} from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export const Navbar = () => {
    return (
        <nav>
            <NavLink to="/dashboard">Dashboard</NavLink>{" "}
            <NavLink to="/profile">Profile</NavLink>{" "}
            <NavLink to="/settings">Settings</NavLink>{" "}
            <NavLink to="/">Login</NavLink>
        </nav>
    );
};

const ProtectedRoute = () => {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

const Login = () => { return (<Navigate to="/dashboard" replace />) }
const Dashboard = () => { return (<p>Hello Welcome to <b>Dashboard</b> Page.</p>) }
const Profile = () => { return (<p>Hello Welcome to <b>Profile</b> Page.</p>) }
const Settings = () => { return (<p>Hello Welcome to <b>Settings</b> Page.</p>) }

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        element: <ProtectedRoute />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "/profile",
                        element: <Profile />,
                    },
                    {
                        path: "/settings",
                        element: <Settings />,
                    },
                ],
            },
        ],
    },
]);