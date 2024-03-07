import { lazy } from "react";


//---------------------------
// imports
//---------------------------
const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const ClientsSection = lazy(() => import("@pages/ClientsSection"));



//---------------------------
// exports
//---------------------------
export const routes_here = [
    {
        path: "/",
        element: <Home />,
        isPrivate: false,
    },
    {
        path: "/login",
        element: <Login />,
        isPrivate: false,
    },
    {
        path: "/client_section",
        element: <ClientsSection />,
        isPrivate: false,
    },
    //routes in objects
];