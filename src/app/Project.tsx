import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import matter from "gray-matter";

// markdown specific imports
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";

import { loader, ProjectMetadata } from "@projects/loader.ts";

import "./project.css";

// forces all project images to be loaded (because Vite is supposed to SPA, but using dynamic pages)
import.meta.glob("/src/assets/*", { eager: true });


const Project = () => {

    const { name } = useParams<string>();
    const [markdown, setMarkdown] = useState<string | null>(null);
    const [frontMatter, setFrontMatter] = useState<ProjectMetadata | null>(null);


    useEffect(() => {
        loader(name as string).then((md: string | null) => {
            if (md) {
                
                const { content, data } = matter(md);
                setMarkdown(() => content);
                setFrontMatter(() => data as ProjectMetadata);

                console.log("data.tools", data.tools);

            } else {
                setMarkdown("## file does not exist ");
            }
        });
    }, [name]);

    return (
        <div className="project-div">
            
            <img src={frontMatter?.img} alt={frontMatter?.img_alt} className="project-img"/>

            <div className="matter-info">
                <h1>{frontMatter?.title}</h1>
                <p>Tools used: {frontMatter?.tools?.join(", ") || "All of them :)"}</p>
                <i>{frontMatter?.date}</i>
            </div>

            {markdown ? (
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeRaw]}
                >
                    {markdown}
                </ReactMarkdown>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );



}

export default Project;