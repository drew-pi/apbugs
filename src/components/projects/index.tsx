import { Box, Link, Typography, ButtonBase, Paper } from '@mui/material';
import { styled } from '@mui/material/styles'
import React, { useState } from 'react';


type projectType = {
    id: number,
    title: string,
    tools: string,
    date: string,
    links: 
        {
            icon?: string,
            name: string,
            link: string,
        }[],
    description: string[],
    img?: string,
    tags: string[],
}

interface Projects {
    projects: projectType[]
}

// Returns a list of project objects that satisfy the filter set (if no filters are selected then all project objects are returned)
const useFilterProject = ({projects}: Projects, activeFilters: string[]) => {

    if (activeFilters.length === 0) {
        return projects
    }

    let filteredProjects: Array<projectType> = []

    projects.forEach((value) => {
        value.tags.forEach((tagValue) => {
            activeFilters.forEach((activeFilterValue) => {
                if (tagValue === activeFilterValue) {
                    if (!filteredProjects.includes(value)) {
                        filteredProjects.push(value)
                    }
                }
            })
        })
    })
    return filteredProjects
}


interface DescriptionState {
    [id: number]: boolean
}

// returns a deep copy of the updated state object to represent the new state if anything new was set to hide
const changeDescriptionState = (state: DescriptionState, id: number, newState: boolean) => {

    const jsonString = JSON.stringify(state);
    const deepCopy = JSON.parse(jsonString);

    deepCopy[id] = newState
    return deepCopy

}

const defaultDescriptionState = (projects: projectType[]) => {

    var descriptionState: DescriptionState = {}
    projects.forEach((value) => {
        descriptionState[value.id] = true
    })
    return descriptionState
}


// unstyled button for the more details element
const MoreDetailsButton = styled(ButtonBase)(({ theme }) => ({
    // border: "1px solid #000",
    // padding: 4,
    // borderRadius: "5px",
}));


interface Props {
    projects: projectType[],
    activeFilters: string[]
}


const ProjectElement = ({props}: {props: Props}) => {

    var {projects, activeFilters } = props

    // if hideDescriptionState[id] is true, the description should be hidden
    const [hideDescriptionState, setHideDescriptionState] = useState<DescriptionState>(defaultDescriptionState(projects))

    projects = useFilterProject({projects}, activeFilters)

    // const [hideDescription, setHideDescription] = useState<boolean>(true)




    return (
        <Paper elevation={0}>
            {projects.map((item) => (
                // <Box sx={{
                //     border: "1px solid #000",
                //     borderRadius: "15px",
                //     boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                //     marginTop: 2,
                // }}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid",
                        borderRadius: "15px",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                        marginTop: 2,
                    }} key={item.id}>
                        {/* Box that includes the title and date, top of each card */}
                        <Box sx={{
                            paddingTop: 1,
                            paddingLeft: 1,
                            paddingRight: 1,
                            display: "flex",
                            flexDirection: "row",
                        }}>
                            <Box sx={{
                                width: "70%",
                            }}>
                                <Typography>{item.title}</Typography>
                            </Box>

                            <Box sx={{
                                width: "30%",
                                textAlign: "end",
                                justifyContent: "flex-end",
                            }}>
                                <Typography>{item.date}</Typography>
                            </Box> 
                        </Box>

                        {/* The tools section of the card, tells what programming tools I used */}
                        <Box sx={{
                            paddingLeft: 1,
                            paddingRight: 1,    
                        }}>
                            <Typography variant={"subtitle2"} sx={{
                                fontSize: "12px",
                            }}>{item.tools}</Typography>
                        </Box>

                        {/* Box that displays the links and the show more button */}
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            padding: 1,
                        }}>
                            <MoreDetailsButton sx={{
                                marginRight: 2,
                            }} 
                            onClick={() => setHideDescriptionState((prev) => changeDescriptionState(prev,item.id,!prev[item.id]))}
                            disableRipple>
                                <Typography sx={{fontSize:"95%",}}>{hideDescriptionState[item.id] ? "More Details" : "Hide Details"}</Typography>
                            </MoreDetailsButton>
                            {item.links.map((subButton) => (
                                <Box sx={{
                                    paddingRight: 2,
                                }} key={subButton.name}>
                                    <MoreDetailsButton  sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        textDecoration: "none",
                                    }}>
                                        {subButton.icon !== undefined ? <img src={subButton.icon} width="10px" alt={subButton.name}/> : ''}
                                        <Link href={subButton.link} target="_blank" sx={{
                                            textDecoration: "none",
                                        }}
                                        color="secondary">
                                            <Typography sx={{
                                                fontSize:"95%",
                                            }}>{subButton.name}</Typography>
                                        </Link>
                                    </MoreDetailsButton>
                                </Box>
                            ))}
                        </Box>

                        <Box sx={{
                            paddingLeft: 1,
                            paddingRight: 1, 
                            paddingBottom: 1,
                            textAlign: "center",
                            // display: "none", 
                            display: hideDescriptionState[item.id] ? "none" : "block",
                        }}>
                            <Box sx={{
                                textAlign: "left",
                            }}>
                                {item.description.map((paragraph) => (
                                    <Typography key={paragraph} sx={{marginBottom: "1rem",}}>{paragraph}</Typography>
                                ))}

                            </Box>


                           <img src={item.img} alt={item.title} width="70%" height="auto" style={{objectFit: "contain",}}/>
                        </Box>
                    </Box>


                // </Box>
            ))}
                
        </Paper>
    )
}

export default ProjectElement;