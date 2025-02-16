import type { InferEntrySchema } from "astro:content";
import "@styles/main.css";

type ProjectListItemProp = { 
    base: string,
    slug: string; 
    meta: InferEntrySchema<"projects">;
}


export default function ProjectListItem({base, slug, meta}: ProjectListItemProp) {
    return (
        <div className="proj-list-item-div">
            
            <i className="date">{meta.date || 1724}</i>

            <p>{meta.title || "Untitled Project"}</p>
            
            <span>[<a href={meta.github || "https://github.com"} target="_blank" rel="noopener noreferrer">GitHub</a>]</span>


            {meta.links?.map(({ link, display_name }) => (
                <span key={link}>[<a href={link} target="_blank" rel="noopener noreferrer">{display_name}</a>]</span>
            ))}

            <span>[<a href={`${base}/projects/${slug}`}>More Info</a>]</span>
        </div>
    )
}