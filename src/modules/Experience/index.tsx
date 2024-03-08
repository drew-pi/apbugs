import { Paper} from '@mui/material';
import React, { useState } from 'react';
import { removeElement } from "../../assets/tools"
import ExperienceElement from '../../components/experience';
import FilterElement from '../../components/filters';
import Layout from '../Layout';


const filters = [
    "Computer Programming", 
    "Machine Learning", 
    "Front End",
    "Leadership", 
    "Research", 
    "Volunteering", 
    "Tutoring", 
    "In Person", 
    "Virtual",
]

const experiences = [
    {
        name: "Cornell Bio-Inspired Fluid Lab",
        title: "ML and Computer Vision Research Assistant",
        period: "January 2024 - Present",
        location: "Ithaca, New York",
        description: "I work under Dr. Sunghwan Jung alongside a diverse group of six students from various disciplines, focusing on measuring the growth and overall health of basil plants in different hydroponic systems. To accomplish this, we developed an IoT system using Raspberry Pi and Jetson Nano to monitor and analyze key parameters such as electrical conductivity/nutrient levels (EC), flow rate, water level, pH, temperature, and humidity. Additionally, we assess total leaf area and health through advanced 3D computer reconstruction models, including technologies like Neural Radiance Fields (NeRF) and Group Anything with Radiance Fields (GARField). Our aim is to use these systems to facilitate more controlled and consistent research outcomes.",
        tags: ["Computer Programming", "In Person", "Research", "Machine Learning"],
    },
    {
        name: "Trillium Trading",
        title: "Web Development, UI/UX, and Software Engineer Intern",
        period: "May 2023 - January 2024",
        location: "New York, New York",
        description: "At Trillium Trading I used advanced analytics and sophisticated technology to empower traders to excel under all market conditions. I worked in a group of 5 interns and 5 full time staff members to create and maintain the documentation website for Trillium proprietary applications using JavaScript, CSS, HTML and Atlassian Applications. Continued to innovate by designing and implementing new UI/UX experiences for the Knowledge Base and company-wide Intranet using Figma and implementing designs using React, TypeScript, JavaScript, MaterialUI, HTML and CSS. Daily update reports and design reviews with top executives of the company where we received constructive criticism and suggestions about our drafts. Automated the collection and analysis of mock trading data for 30 trading interns using JavaScript and the Google Sheets API. Additionally, I created the first ever onboarding program for future web development and IT interns using data collected from surveys. This experience formally introduced me to the software development lifecycle where my team was expected to design, review, implement and maintain various softwares. Working at Trillium for such a long time also taught me how to better work in a professional team environment and understand and implement program specifications.",
        tags: ["Computer Programming", "In Person", "Front End"],
    },
    {
        name: "DOROT Tech Support Program",
        title: "Founder and President",
        period: "January 2022 - April 2023",
        location: "New York, New York",
        description: "This partnership and year-long program was spurred by a personal experience where my grandfather struggled with technology. In collaboration with DOROT, I initiated an online technical support program for the elderly. Me and a group of interns that I organized assisted many older adults in learning to use their electronic devices, such as smartphones, laptops, and iPads, which were previously unfamiliar to them. However, the program evolved into more than just a tech support class; it became a close-knit community of teens and older adults who genuinely cared for each other. Starting with a small group, by the end of our program, we had become an integral part of DOROT's GENuine Connections offerings, attracting over 30 participants each week. We developed a new curriculum weekly, covering various topics. Over time, we identified more effective strategies, such as adopting a slower pace and providing in-depth explanations, which significantly enhanced our mentees' comprehension and most importantly retention of the material. This experience was incredibly fulfilling, as it not only facilitated learning but also allowed me to bond with the mentees on a personal level.",
        tags: ["Tutoring", "Leadership", "Volunteering"],
    },
    {
        name: "STEAM Champs",
        title: "Tutor and Coach",
        period: "January - April 2023",
        location: "Brooklyn, New York",
        description: "At STEAM Champs, a camp dedicated to sparking K-9 students' interest in technology and computational thinking, I planned and led robotics and computer programming classes for children aged 5 to 14. Utilizing technologies like LEGO SPIKE, Minecraft Code Space, Minecraft Education Coding, Arduino, Cubits, and Micro:bit, I introduced campers to basic programming concepts, fostering their excitement for technology. Each day, I engaged with the campers' parents to update them on their child's progress. Additionally, I produced montage videos of the students' experiences and created advertising materials using Canva, iMovie, and Photoshop for the company's social media platforms. Additionally, on weekends, I represented STEAM Champs at various school fairs throughout Brooklyn, promoting our programs. As STEAM Champs is a relatively small operation, my role was multifaceted, providing me with an excellent opportunity to enhance my skills in many different areas such as digital advertising and client relationship management. Working with elementary and middle school-aged children also offered numerous valuable learning experiences. For example, I encountered a child with anger management issues and ASD. Initially, managing his focus and maintaining calm was challenging. However, by employing strategies such as using stress toys and incorporating regular breaks—methods I researched online—I was able to facilitate a fun and productive class during his subsequent visits.",
        tags: ["Computer Programming", "Tutoring", "In Person", "Leadership"],
    },
    {
        name: "NYU Tandon School of Engineering mLab",
        title: "Cybersecurity Research Assistant",
        period: "June - December 2022",
        location: "Brooklyn, New York",
        description: "Worked with Danny Y. Huang in his cybersecurity lab to research the privacy risks associated with Bluetooth Low Energy (BLE) beacons, using a custom Android application for data collection. While working at the lab, I developed a Python program to correlate detected beacons with nearby department stores using libraries such as Pandas, NumPy, Matplotlib, and SQLite as well as geolocation APIs such as Mapbox and OpenStreetMap. This experience was incredibly interesting, as it not only introduced me to the field of cybersecurity research and the analysis of extensive datasets but also offered greater flexibility compared to my other experiences. This flexibility allowed me to be highly adaptable, take initiative by assuming additional responsibilities, and engage much more in the research process.",
        tags: ["Computer Programming", "Research", "Virtual"],
    },
    {
        name: "New York Center for Interpersonal Development (NYCID)",
        title: "Intern",
        period: "June - August 2022",
        location: "Staten Island, New York",
        description: "NYCID promotes the improvement of human relationships and the strengthening of communities. They provide youth, community, and professional development programs, as well as dispute resolution services that educate and inform the public about constructive problem-solving, effective communication, and intercultural awareness. While working at NYCID, I expanded their core business by reaching out to both potential and current clients. Additionally, they offered me the opportunity to participate in several weeks of professional development, where I learned about financial literacy, graphic and brand design using Canva, and advanced data modeling and analysis techniques through spreadsheets.",
        tags: ["Virtual"],
    },
    {
        name: "Engineering Summer Program at UW-Madison",
        title: "Intern",
        period: "June 2022",
        location: "Madison, Wisconsin",
        description: "Worked in groups of more than five interns during daily engineering workshops to develop equitable engineering and technological solutions for both theoretical and real-world issues. It was a great experience because it introduced me to university-level engineering and computer science topics.",
        tags: ["Virtual"],
    },
    {
        name: "DOROT Summer Teen Program",
        title: "Intern",
        period: "June - August 2021",
        location: "Brooklyn, New York",
        description: "This was a structured camp-like program where we learned how to run tutoring and experience programs. We collaborated in teams of up to 6 people to create and run tutoring, arts and crafts, and conversation programs for older adults where. We used slack to facilitate and manage many projects and presentations. This was an amazing experience as it was my first time generating, planning, and executing projects at a professional level. Initially, it was challenging because our group's programs didn’t flow well and were somewhat unengaging. However, we quickly adapted, developing programs that were exciting for everyone involved and successfully accomplished their objectives.",
        tags: ["Virtual", "Leadership", "Tutoring"],
    },
    {
        name: "American Pool",
        title: "Head Lifeguard",
        period: "June - August 2021",
        location: "Brooklyn, New York",
        description: "During this lifeguarding job, I supervised five private pools and was responsible for the safety and well-being of over 300 patrons. I also measured and adjusted the chlorine and pH levels every hour, ensuring that the pool area remained clean and safe. In addition, I worked with over 15 local managers and superintendents to resolve technical and security issues. This experience was stressful at times, as I was accountable for the patrons' safety, but by employing preventative measures, I ensured there were no problems. It also taught me effective communication with a variety of people—each superintendent had different expectations, and I made sure to respect each one's rules, managing to maintain incredibly positive professional relationships.",
        tags: ["In Person", "Leadership"],
    },
    {
        name: "North Meadow Farm",
        title: "Farmhand",
        period: "April - August 2020",
        location: "Manchester Center, Vermont",
        description: "During COVID, I spent a considerable amount of time in Vermont and decided to try something new by volunteering at a nearby family-owned farm. We fed and provided water to over 100 animals every day, located throughout the area. Along with a team of four other farmhands, we maintained the animals' environments, keeping an organized schedule for cleaning the pens and coordinating tasks efficiently. Our duties also included collecting eggs, herding cows from the pastures, and assisting in milking them. This experience was incredibly eye-opening and very fun. It was interesting to learn how modern technology and traditional farming techniques are integrated on a small-scale farm. We became very close with the family that owned the farm and still keep in touch today.",
        tags: ["In Person", "Volunteering"],
    },

]

const Experience = () => {

    // const {activeFilters,setActiveFilters} = useContext(FilterContext)
    const [activeFilters, setActiveFilters] = useState<string[]>([])

    const handleUpdate = (newItem: string) => {
       setActiveFilters((prev) => prev.includes(newItem) ? removeElement([...prev],newItem) : [...prev, newItem]);
      };
    
    const experienceProps = {
        experiences: experiences,
        activeFilters: activeFilters,
    }

    const filterProps = {
        filters: filters,
        setActiveFilters: handleUpdate,
    }

    return (
        // <FilterContextProvider>
            <Layout>
                <FilterElement props={filterProps}/>
                <Paper elevation={0}>
                    <ExperienceElement props={experienceProps}/>
                    
                </Paper>
            </Layout>
        // </FilterContextProvider>
        
    )
}

export default Experience;