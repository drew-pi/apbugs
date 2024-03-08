import React, { useState } from 'react';
import { removeElement } from "../../assets/tools"
import Layout from '../Layout';
import FilterElement from '../../components/filters';

import ProjectElement from '../../components/projects';
import { Paper } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';

import higherOrLower from "../../assets/imgs/projects/higher-or-lower.jpg"
import macauProject from "../../assets/imgs/projects/macau-project.jpg";
import plantsVsZombies from "../../assets/imgs/projects/plants-vs-zombies-project.jpg";
import demographProject from "../../assets/imgs/projects/demog-map.png";

const filters = [
    "Full Stack",
    "Java",
    "Collaborative",
    "Python",
    "JavaScript",
    "Front End",
    "Back End",
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
        title: "Personal Website",
        tools: "TypeScript, JavaScript, React.js, HTML, CSS",
        date: "2023",
        links: [
            {
                name: "Code",
                link: "https://github.com/drew-pi/Personal-Website",
            },
            {
                name: "Wesbite",
                link: "google.com"
            }
        ],
        description: [
            "This was a personal project that I decided to create to learn more about Typescript and React.js and to showcase my other projects (future planned ones and past ones). I used React Router to facilitate the multiple pages (or modules) in this website because it is not big enough to warrant a server side update (using Next.js). I also used React theming to customize fonts, breakpoints and colors. ",
            "Possible further improvements would be to automatically fetch the images and text from a database (this could be as simple as a google drive/doc or another Headless Content Management System or as complicated as creating a custom API just for fun). Additionally, I am still figuring out what the Extra section will be used for. Potentially a collection of blogs or essays that I have written.",
        ],
        tags: ["JavaScript", "Front End"]
    },
    {
        id: 2,
        title: "Demographic Data Modelling",
        tools: "Python, Flask, Jinja, JavaScript, Leaflet API, SQlite, HTML, Bootstrap, CSS, Linux, Nginx",
        date: "2023",
        links: [
            {
                name: "Code",
                link: "https://github.com/drew-pi/P04_BubblingBanjos",
            }
        ],
        description: [
            "WARNING: Because of some misplaced files, this can no longer be run. The setup.py file is supposed to download some 3 GB of data from external sources and compress it into a SQlite file, however those external files are missing, so it is no longer able to run locally. ",
            "Senior year school project with a focus on using RESTful API's and data modeling. Worked in a group of 5 to create an online map that shows different demographic data in the NYC area - including English literacy rates by neighborhood and crime scenes (using geodata). In the end we created a choropleth map using a JavaScript library, Leaflet. Our website design heavily uses standard Flask techniques and HTML and CSS with bootstrap to create the frontend and SQlite to handle storing some of the data (most of the data came from API’s though). ",
            "During my senior year this website was hosted in a DigitalOcean droplet, however my student credits ran out so it is no longer online",
            "Possible further improvements would be to introduce lazy loading so that not all of the data is imported immediately. This would speed up website load times and also allow the website to take up less memory. Another improvement would be to allow the user to select multiple dates to filter crime scenes, currently you can only choose one date.",
        ],
        img: demographProject,
        tags: ["Python", "Full Stack", "Collaborative", "Front End", "Back End"]
    },
    {
        id: 3,
        title: "High or Lower",
        tools: "Python, Flask, Jinja, SQlite, HTML, Bootstrap, CSS, Linux, Nginx",
        date: "2022",
        links: [
            {
                name: "Code",
                link: "https://github.com/drew-pi/p1-Squirtle_Squadron/tree/main",
            }
        ],
        description: [
            "Organized and led a group of 6 students for a mid year project in my Senior year Software Development class. We used Flask, Python (the Jinja library), and bootstrap for the frontend and middleware and SQlite for the backend to create a higher or lower game where the user is presented with two cities and has to guess which one has a greater population. We used the Python flask app routes to facilitate the website and functionality. We used a SQlite database to store people's accounts and RESTful apis to gather the data about cities (including population, location, etc). ",
            "For some time, this site was hosted on a DigitalOcean droplet using Nginx, however our student credits ran out so it is no longer online.",
            "Possible further improvements would be to implement the leaderboard functionality. We started implementing this feature (as you can see by the button nubs) but we ran out of time. Additionally, potentially loading some of the images into the database before starting the game may take some load off the program and lead to less lag and faster loading times.",
       ],
        img: higherOrLower,
        tags: ["Python", "Full Stack", "Collaborative", "Front End", "Back End"]
    },
    {
        id: 4,
        title: "Plants vs Zombies",
        tools: "Java, Processing",
        date: "2022",
        links: [
            {
                name: "Code",
                link: "https://github.com/drew-pi/Ruff-Commandos-Final-Project",
            }
        ],
        description: [
            "This is my final project for Junior year AP Computer Science class that I worked on with one other student. We used the Java Processing library to create a Plants vs Zombies game. Processing is very similar to Swing (another popular Java GUI) library. It is a single thread program that calls on visual objects that overwrite inherited functions. Each file except for the Woo.pde file (which is the runnable file) contains data to draw and react to other visual elements. The zombies are stored in a minimum heap (which we implemented ourselves) based on how much health they have and are released periodically.",
            "Possible further improvements would be to update the Launch Codes in the Readme. Processing needs to be downloaded separately so some instructions would be helpful for people who have never used it before. Additionally, cleaning up the codebase by placing zombie processing files in one folder, images in an assets folder, and other visual files in a setup file. ",
        ],
        img: plantsVsZombies,
        tags: ["Java", "Bash", "Collaborative"]
    },
    {
        id: 5,
        title: "Macau",
        tools: "Java, Scanner Library, Bash Terminal",
        date: "2022",
        links: [
            {
                name: "Code",
                link: "https://github.com/drew-pi/Macau-Java-Project",
            }
        ],
        description: [
            "This is a project that I created with a group of 3 of my friends for a AP Computer Science mid year project my Junior year. We used Java and the Scanner library to create an interactive single player card game called Macau which is very similar to Uno except it uses a 52 card deck. Our design utilizes OOP principles to simplify the game design and allow it to be modular and maintainable. We also implemented a computer player that automatically places cards automatically so that the user can play individually. ",
            "We started out with creating a project proposal, UML diagram, and flowchart (which can be found in the GitHub) and thinking about how our program would run. With this ground work in place, we started writing the code and creating the classes. We worked on classes separately, implementing black box testing and collaboration techniques. ",
            "Possible further improvements would be to create better Launch Codes in the Readme, add an option to play against another player (by clearing the screen and printing the next player's information), and clean up the overall code because there are some redundant vestigial functions. ",
        ],
        img: macauProject,
        tags: ["Java", "Bash", "Collaborative"]
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
                    <ProjectElement props={projectProps}/>
                </Paper>
            </Layout>
        </div>
    )
}

export default Projects;