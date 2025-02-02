
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Project from "@app/Project.tsx"; // import project renderer (takes care of its own routing by matching to file name)
import Main from "@app/Main";
import ProjectHomepage from "./ProjectHomepage";

export default function RoutingApp() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/projects" element={<ProjectHomepage />} />
            <Route path="/projects/:name" element={<Project />} />
        </Routes>
    </Router>
    );
}