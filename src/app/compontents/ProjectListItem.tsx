import { Link } from "react-router-dom";
import './project-list-item.css';

import { ProjectListItemProp } from "./ProjectList";




export default function ProjectListItem({slug, meta}: ProjectListItemProp) {
    return (
        <div className="proj-list-item-div">
            
            <i>{meta.date || 1724}</i>

            <p>{meta.title || "Untitled Project"}</p>

            <span>[<Link to={`/project/${slug}`}>More Info</Link>]</span>

            {meta.links?.map(({ link, display_name }) => (
                <span key={link}>[<a href={link}>{display_name}</a>]</span>
            ))}
        </div>
    )
}