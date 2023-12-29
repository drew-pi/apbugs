import React, { useState } from 'react';
import { removeElement } from "../../assets/tools"
import Layout from '../Layout';
import FilterElement from '../../components/filters';

import moonIcon from  "../../assets/icons/moon.svg"
import ProjectElement from '../../components/projects';
import { Paper } from '@mui/material';


const filters = [
    "Full Stack",
    "Java",
    "Collaborative",
    "Python",
    "JavaScript",
    "Front End",
    "Back End",
    "Research",
]


// type projectType = {
//     title: string,
//     tools: string,
//     date: string,
//     links: 
//         {
//             icon?: string,
//             name: string,
//             link: string,
//         }[],
//     tags: string[],
// }

const projects = [
    {
        id: 1,
        title: "Message and Direct Message Unifier Project (MADMUP)",
        tools: "Full Stack Front End Back End",
        date: "2024",
        links: [
            {
                icon: moonIcon,
                name: "code",
                link: "https://google.com"
            }
        ],
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
        tags: ["Full Stack", "Front End", "Back End"]
    },
    {
        id: 2,
        title: "Message and Direct Message Unifier Project (MADMUP)",
        tools: "Full Stack",
        date: "2024",
        links: [
            {
                name: "code",
                link: "https://voussoir.net/"
            },
            {
                name: "code 2",
                link: "https://www.yianyin.net/research.html"
            },

        ],
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
        tags: ["Full Stack"]
    },
    {
        id: 3,
        title: "Message and Direct Message Unifier Project (MADMUP)",
        tools: "Python",
        date: "2024",
        links: [
            {
                name: "code",
                link: "https://www.muhlbergerweb.com/about/"
            }, 
            {
                name: "coding practice",
                link: "https://www.nikosirmpilatze.com/"
            }, 
            {
                name: "abcdefghijklmop",
                link: "https://benemdon.github.io/"
            }, 
        ],
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
        tags: ["Python"]
    },
    {
        id: 4,
        title: "Message and Direct Message Unifier Project (MADMUP)",
        tools: "Collaborative",
        date: "2024",
        links: [
            {
                name: "code",
                link: "https://www.muhlbergerweb.com/about/"
            }, 
            {
                name: "coding practice",
                link: "https://www.nikosirmpilatze.com/"
            }, 
            {
                name: "abcdefghijklmop",
                link: "https://benemdon.github.io/"
            }, 
        ],
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
        tags: ["Collaborative"]
    },
    {
        id: 5,
        title: "Message and Direct Message Unifier Project (MADMUP)",
        tools: "Java",
        date: "2024",
        links: [
            {
                name: "code",
                link: "https://www.muhlbergerweb.com/about/"
            }, 
            {
                name: "coding practice",
                link: "https://www.nikosirmpilatze.com/"
            }, 
            {
                name: "abcdefghijklmop",
                link: "https://benemdon.github.io/"
            }, 
        ],
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
        tags: ["Java"]
    },
    {
        id: 6,
        title: "Message and Direct Message Unifier Project (MADMUP)",
        tools: "Research",
        date: "2024",
        links: [
            {
                name: "code",
                link: "https://www.muhlbergerweb.com/about/"
            }, 
            {
                name: "coding practice",
                link: "https://www.nikosirmpilatze.com/"
            }, 
            {
                name: "abcdefghijklmop",
                link: "https://benemdon.github.io/"
            }, 
        ],
        description: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
        tags: ["Research"]
    },

]

const Projects = () => {

    const [activeFilters, setActiveFilters] = useState<string[]>([])

    const handleUpdate = (newItem: string) => {
       setActiveFilters((prev) => prev.includes(newItem) ? removeElement([...prev],newItem) : [...prev, newItem]);
      };
    
    const projectProps = {
        projects: projects,
        activeFilters: activeFilters,
    }

    const filterProps = {
        filters: filters,
        setActiveFilters: handleUpdate,
    }

    return (
        <div>
            <Layout>
                <FilterElement props={filterProps}/>
                <Paper sx={{width: "100%",}} elevation={0}>
                    Projects
                    <ProjectElement props={projectProps}/>
                </Paper>
            </Layout>
        </div>
    )
}

export default Projects;