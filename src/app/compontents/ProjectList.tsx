import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { loadAll, ProjectMetadata } from "@projects/loader";
import ProjectListItem from "./ProjectListItem";

import { MainProps } from "../Main";

import "./project-list.css"


export type ProjectListItemProp = { 
    slug: string; 
    meta: ProjectMetadata
}

const ProjectList: React.FC<MainProps> = ({id}) => {
    const [projects, setProjects] = useState<ProjectListItemProp[]>([]);

    const limit = 7;

    useEffect(() => {
        loadAll(limit).then(setProjects); // fetch all of the projects
    }, []);

    console.log(projects)

    return (
        <div className="project-list-div" id={id}>
            <a href="#page-1" className="switch-page page-up">↑</a>
            <h1>Projects</h1>
            <ul>
                {projects.map(({ slug, meta }) => (
                    <ProjectListItem slug={slug} meta={meta} key={slug}/>
                ))}
            </ul>

            <Link className="show-more" to={`/projects`}>Show More</Link>
            <a href="#page-3" className="switch-page page-down">↓</a>
        </div>
    );
};

export default ProjectList;

