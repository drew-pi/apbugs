import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import matter from "gray-matter";

// markdown specific imports
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";

import { loader } from "@projects/loader.ts";


const Project = () => {

    const { name } = useParams<string>();
    const [markdown, setMarkdown] = useState<string | null>(null);

    useEffect(() => {
        loader(name as string).then((md: string | null) => {
            if (md) {
                
                const { content } = matter(md);
                setMarkdown(() => content);
            } else {
                setMarkdown("## file does not exist ");
            }
        });
    }, [name]);

    console.log(name);

    return (
        <div>
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