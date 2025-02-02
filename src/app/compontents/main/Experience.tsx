import { useEffect, useState } from 'react';

// markdown specific imports
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";

import matter from "gray-matter";

import { MainProps } from '@app/Main';



// loads the experience markdown 
const loadExperience = async () => {
    const rawBlurb = import.meta.glob('/src/content/experience.md', { query: '?raw', import: 'default' });
    const [_, importer] = Object.entries(rawBlurb)[0];
    const content = await (importer as () => Promise<string>)(); // get the markdown content and then get the front matter
    return content
}



const Experience: React.FC<MainProps> = ({id}) => {
    const [markdown, setMarkdown] = useState<string | null>(null);

    useEffect(() => {
        loadExperience().then((rawContent) => {
            const { content } = matter(rawContent); // get front matter and content
            setMarkdown(() => content);
        }); // fetch the blurb and then display it
    }, []);
    
    return (
        <div className='experience-div main-sections' id={id}>

            <a href="#page-1" className="switch-page page-up">↑</a>

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

            <a href="#page-3" className="switch-page page-down">↓</a>


        </div>

    )
}

export default Experience;

