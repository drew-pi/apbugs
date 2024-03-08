import {RouterProvider, createBrowserRouter } from "react-router-dom";
import React from 'react';
import AboutMe from "./AboutMe";
import Error from "./Error";
import Experience from "./Experience";
import Extra from "./Extra";
import Projects from "./Projects";
import Resume from "./Resume";


const router = createBrowserRouter([
    {
        path: "/",
        element: <AboutMe />,
        errorElement: <Error />,
    },
    {
        path: "/projects",
        element: <Projects />,
        errorElement: <Error />,
    },
    {
        path: "/experience",
        element: <Experience />,
        errorElement: <Error />,
    },
    {
        path: "/extra",
        element: <Extra/>,
        errorElement: <Error />,
    },
    {
        path: "resume",
        element: <Resume />,
        errorElement: <Error />

    }
])
const RoutingApp = () => {
    return <RouterProvider router={router} />;
}

export default RoutingApp;