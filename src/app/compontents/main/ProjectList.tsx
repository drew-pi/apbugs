import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { loadAll, ProjectMetadata } from "@projects/loader";
import ProjectListItem from "../ProjectListItem";

import { MainProps } from "../../Main";


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

    return (
        <div className="main-sections main-centered-sections" id={id}>
            <a href="#page-2" className="switch-page page-up">↑</a>
            <h1>Projects</h1>
            <ul>
                {projects.map(({ slug, meta }) => (
                    <ProjectListItem slug={slug} meta={meta} key={slug}/>
                ))}
            </ul>

            <Link className="show-more" to={`/projects`}>Show More</Link>

        </div>
    );
};

export default ProjectList;

