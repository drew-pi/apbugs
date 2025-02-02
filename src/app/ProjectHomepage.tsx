import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { ProjectListItemProp } from '@app/compontents/ProjectList';
import { loadAll } from '@projects/loader';

import "@app/project-homepage.css";


const ProjectHomepage: React.FC = () => {
    const [projects, setProjects] = useState<ProjectListItemProp[]>([]);

    useEffect(() => {
        loadAll().then(setProjects); // fetch all of the projects
    }, []);

    return (
        <div className='project-homepage-div'>
            <h1 className='top-text'>Projects</h1>

            {projects.map(({slug, meta}) => (
                <div key={slug} className='project-container-div'>

                    <h3 className='project-title'>{meta.title}</h3>
                    <p>{meta.description}</p>

                    <div className='project-links'>
                        <span>[<a href={meta.github}>GitHub</a>]</span>
                        {meta.links?.map(({display_name, link}) => (
                            <span key={link}>[<a href={link}>{display_name}</a>]</span>
                        ))}
                    </div>
                    


                    <Link to={`/projects/${slug}`} className='learn-more-link'>Learn More</Link>

                </div>

            ))}
        </div>
    )

}

export default ProjectHomepage