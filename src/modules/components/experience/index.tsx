import { Box, Typography } from '@mui/material';
import React from 'react';


type experienceType = {
    name: string,
    title: string,
    period: string,
    location: string,
    description: string,
    tags: string[],
}

interface Experience {
    experiences: experienceType[]
}

const useFilterExperience = ({experiences}: Experience, activeFilters: string[]) => {

    if (activeFilters.length === 0) {
        return experiences
    }

    // console.log(activeFilters)

    let filteredExperiences: Array<experienceType> = []

    experiences.forEach((value) => {
        value.tags.forEach((tagValue) => {
            activeFilters.forEach((activeFilterValue) => {
                if (tagValue === activeFilterValue) {
                    if (!filteredExperiences.includes(value)) {
                        filteredExperiences.push(value)
                    }
                }
            })
        })
    })
    return filteredExperiences
}


interface Props {
    experiences: experienceType[],
    activeFilters: string[]
}


const ExperienceElement = ({props}: {props: Props}) => {

    var {experiences, activeFilters } = props

    experiences = useFilterExperience({experiences}, activeFilters)
    // experiences.map((item) => console.log(item))

    return (
        <Box>
            {experiences.map((item) => (
                <Box sx={{
                }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: 2,
                    }}>
                        <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "70%",
                        }}>
                            <Typography variant={"h5"} sx={{}}>{item.name}</Typography>
                            <Typography variant={"subtitle2"}>{item.title}</Typography>

                        </Box>

                        <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "30%",
                        textAlign: "end",
                        justifyContent: "flex-end",
                        }}>
                            <Typography variant={"subtitle2"}>{item.period}</Typography>
                            <Typography variant={"subtitle2"}>{item.location}</Typography>
                        
                        </Box>

                    </Box>

                    <Box sx={{
                        paddingTop: 1,
                    }}>
                        {item.description}
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default ExperienceElement;