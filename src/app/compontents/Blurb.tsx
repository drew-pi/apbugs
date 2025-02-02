import { useEffect, useState } from 'react';

// markdown specific imports
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";

import matter from 'gray-matter';

import { MainProps } from '../Main';

import "./blurb.css";


// loads the blurb markdown 
const loadBlurb = async () => {
    const rawBlurb = import.meta.glob('/src/content/blurb.md', { query: '?raw', import: 'default' });
    const [_, importer] = Object.entries(rawBlurb)[0];
    const content = await (importer as () => Promise<string>)(); // get the markdown content and then get the front matter
    return content
}

type BlurbProp = {
    h1?: string;
    h3?: string;
    img?: string;
    img_alt?: string;
}



const Blurb: React.FC<MainProps> = ({id}) => {
    const [markdown, setMarkdown] = useState<string | null>(null);
    const [meta, setMeta] = useState<BlurbProp | null>(null);

    useEffect(() => {
        loadBlurb().then((rawContent) => {
            const { content, data } = matter(rawContent); // get front matter and content
            setMeta(() => data as BlurbProp)
            setMarkdown(() => content);
        }); // fetch the blurb and then display it
    }, []);


    return (
        <div className='blurb-div' id={id}>

            <div className='intro-div'>
                <div className='intro-text-div'>
                    <h1>{meta && meta.h1}</h1>
                    <h3>{meta && meta.h3}</h3>
                </div>


                {meta && <img src={meta?.img} alt={meta?.img_alt} className='blurb-img'/>}
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

            <a href="#page-2" className='switch-page page-down'>↓</a>

        </div>
    )
}

export default Blurb;

