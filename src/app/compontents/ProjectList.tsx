import { useEffect, useState } from "react";
import { loadAll, ProjectMetadata } from "@projects/loader";
import ProjectListItem from "./ProjectListItem";
import "./project-list.css"


export type ProjectListItemProp = { 
    slug: string; 
    meta: ProjectMetadata
}

const ProjectList: React.FC = () => {
    const [projects, setProjects] = useState<ProjectListItemProp[]>([]);

    useEffect(() => {
        loadAll().then(setProjects); // fetch all of the projects
    }, []);

    console.log(projects)

    return (
        <div className="project-list-div">
            <h1>Projects</h1>
            <ul>
                {projects.map(({ slug, meta }) => (
                    <ProjectListItem slug={slug} meta={meta} key={slug}/>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;

