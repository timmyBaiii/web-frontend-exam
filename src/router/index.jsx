import React from "react";
import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";

import Home from "@/views/home/index";

export const constantRoutes = [
    {
        path: "/",
        element: <Navigate to='web-frontend-exam' />,
    },
    {
        path: "/web-frontend-exam",
        element: <Home />,
        meta: {
            title: "首頁"
        }
    },
    {
        path: "*",
        element: <Navigate to='web-frontend-exam' />
    }
];

// router components
const Routers = (props) => {
    const RouterWaiter = () => {
        const element = useRoutes(constantRoutes);

        return element;
    };

    return (
        <BrowserRouter basename="/">
            <RouterWaiter></RouterWaiter>
        </BrowserRouter>
    );
};

export default Routers;
