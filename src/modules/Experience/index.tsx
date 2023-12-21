import { Box } from '@mui/material';
import React, { useState } from 'react';
import { removeElement } from "../../assets/tools"
import ExperienceElement from '../components/experience';
import FilterElement from '../components/filters';
import Layout from '../Layout';


const filters = [
    "Technical",
    "Research",
    "Tutoring",
    "Volunteering",
    "Computer Programming",
    "Leadership",
    "In Person",
    "Virtual",
]

const experiences = [
    {
        name: "Trillium",
        title: "Software Engineer and UI/UX Intern",
        period: "May - January 2023",
        location: "New York, NY",
        description: "Caerphilly fromage frais jarlsberg. Blue castello cottage cheese fromage rubber cheese caerphilly brie fondue smelly cheese. Cheesy grin cheeseburger everyone loves st. agur blue cheese when the cheese comes out everybody's happy st. agur blue cheese cheeseburger stinking bishop. Boursin cut the cheese pecorino when the cheese comes out everybody's happy mascarpone. Paneer monterey jack stilton. Who moved my cheese fromage cheese and wine bocconcini parmesan bavarian bergkase emmental cut the cheese. Port-salut cheddar red leicester taleggio ricotta stinking bishop red leicester macaroni cheese. Squirty cheese.",
        tags: ["Technical",],
    },
    {
        name: "Research",
        title: "Software Engineer and UI/UX Intern",
        period: "May - January 2023",
        location: "New York, NY",
        description: "Caerphilly fromage frais jarlsberg. Blue castello cottage cheese fromage rubber cheese caerphilly brie fondue smelly cheese. Cheesy grin cheeseburger everyone loves st. agur blue cheese when the cheese comes out everybody's happy st. agur blue cheese cheeseburger stinking bishop. Boursin cut the cheese pecorino when the cheese comes out everybody's happy mascarpone. Paneer monterey jack stilton. Who moved my cheese fromage cheese and wine bocconcini parmesan bavarian bergkase emmental cut the cheese. Port-salut cheddar red leicester taleggio ricotta stinking bishop red leicester macaroni cheese. Squirty cheese.",
        tags: ["Research"],
    },
    {
        name: "Tutoring",
        title: "Software Engineer and UI/UX Intern",
        period: "May - January 2023",
        location: "New York, NY",
        description: "Caerphilly fromage frais jarlsberg. Blue castello cottage cheese fromage rubber cheese caerphilly brie fondue smelly cheese. Cheesy grin cheeseburger everyone loves st. agur blue cheese when the cheese comes out everybody's happy st. agur blue cheese cheeseburger stinking bishop. Boursin cut the cheese pecorino when the cheese comes out everybody's happy mascarpone. Paneer monterey jack stilton. Who moved my cheese fromage cheese and wine bocconcini parmesan bavarian bergkase emmental cut the cheese. Port-salut cheddar red leicester taleggio ricotta stinking bishop red leicester macaroni cheese. Squirty cheese.",
        tags: ["Tutoring", "Volunteering"],
    },
    {
        name: "Volunteering",
        title: "Software Engineer and UI/UX Intern",
        period: "May - January 2023",
        location: "New York, NY",
        description: "Caerphilly fromage frais jarlsberg. Blue castello cottage cheese fromage rubber cheese caerphilly brie fondue smelly cheese. Cheesy grin cheeseburger everyone loves st. agur blue cheese when the cheese comes out everybody's happy st. agur blue cheese cheeseburger stinking bishop. Boursin cut the cheese pecorino when the cheese comes out everybody's happy mascarpone. Paneer monterey jack stilton. Who moved my cheese fromage cheese and wine bocconcini parmesan bavarian bergkase emmental cut the cheese. Port-salut cheddar red leicester taleggio ricotta stinking bishop red leicester macaroni cheese. Squirty cheese.",
        tags: ["Volunteering"],
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
                <Box>
                    Experience
                    <ExperienceElement props={experienceProps}/>
                    
                </Box>
            </Layout>
        // </FilterContextProvider>
        
    )
}

export default Experience;