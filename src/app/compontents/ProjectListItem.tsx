import { Link } from "react-router-dom";
import './project-list-item.css';

import { ProjectListItemProp } from "./main/ProjectList";




export default function ProjectListItem({slug, meta}: ProjectListItemProp) {
    return (
        <div className="proj-list-item-div">
            
            <i className="date">{meta.date || 1724}</i>

            <p>{meta.title || "Untitled Project"}</p>
            
            <span>[<a href={meta.github}>GitHub</a>]</span>


            {meta.links?.map(({ link, display_name }) => (
                <span key={link}>[<a href={link}>{display_name}</a>]</span>
            ))}

            <span>[<Link to={`/projects/${slug}`}>More Info</Link>]</span>
        </div>
    )
}