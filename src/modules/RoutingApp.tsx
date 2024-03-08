import React from 'react';
// import {RouterProvider, createBrowserRouter } from "react-router-dom";
import {HashRouter, Routes, Route } from "react-router-dom";

import AboutMe from "./AboutMe";
import Error from "./Error";
import Experience from "./Experience";
import Extra from "./Extra";
import Projects from "./Projects";
import Resume from "./Resume";


// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <AboutMe />,
//         errorElement: <Error />,
//     },
//     {
//         path: "/projects",
//         element: <Projects />,
//         errorElement: <Error />,
//     },
//     {
//         path: "/experience",
//         element: <Experience />,
//         errorElement: <Error />,
//     },
//     {
//         path: "/extra",
//         element: <Extra/>,
//         errorElement: <Error />,
//     },
//     {
//         path: "resume",
//         element: <Resume />,
//         errorElement: <Error />

//     }
// ])
// const RoutingApp = () => {
//     return <RouterProvider router={router} />;
// }

const RoutingApp = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/extra" element={<Extra />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </HashRouter>
    );
}

export default RoutingApp;