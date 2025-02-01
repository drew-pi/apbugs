
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Project from "@app/Project.tsx"; // import project renderer (takes care of its own routing by matching to file name)
import Main from "@app/Main";

export default function RoutingApp() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/project/:name" element={<Project />} />
        </Routes>
    </Router>
    );
}