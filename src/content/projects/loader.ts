import matter from 'gray-matter';

const rawProjects = import.meta.glob('/src/content/projects/*.md', { query: '?raw', import: 'default' });

export async function loader(url: string): Promise<string | null> {
    const path = `/src/content/projects/${url}.md`;

    if (rawProjects[path]) {
        return (rawProjects[path] as () => Promise<string>)();
    }
    // Return null if file doesn't exist
    return null;
}


export type ProjectMetadata = {
    title?: string;
    description?: string;
    github?: string;
    links?: {display_name: string, link: string}[];
    img?: string;
    img_alt?: string;
    tags?: string[];
    tools?: string[];
    date?: string;
};


type LoadAll = {
    slug: string; 
    meta: ProjectMetadata
}[]


export async function loadAll(limit?: number): Promise<LoadAll> {
    const projects = Object.entries(rawProjects);
    const projectList: { slug: string; meta: ProjectMetadata }[] = [];

    for (const [path, importer] of projects) {

        const content = await (importer as () => Promise<string>)(); // get the markdown content and then get the front matter
        const { data } = matter(content);

        const slug = path.replace('/src/content/projects/', '').replace('.md', ''); // clean up the file path so that only get the readable name
        projectList.push({ slug, meta: data as ProjectMetadata });
    }

    return projectList.sort((a, b) => {
        return Number(b.meta.date ?? 0) -  Number(a.meta.date ?? 0)
    }).slice(0,limit ?? projectList.length);



}