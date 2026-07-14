
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAuthenticated = true; 

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const Login = () => { return (<p>Hello Welcome to <b>Login</b> Page.</p>) }
const Dashboard = () => { return (<p>Hello Welcome to <b>Dashboard</b> Page.</p>) } 
const Profile = () => { return (<p>Hello Welcome to <b>Profile</b> Page.</p>) }
const Settings = () => { return (<p>Hello Welcome to <b>Settings</b> Page.</p>) }

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
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
]);