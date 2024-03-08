import { Box, Link, Paper, Typography} from '@mui/material';
import React from 'react';
import Layout from '../Layout';

import selfPhoto from "../../assets/imgs/photo.jpg";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutMe = () => {
    return (
        <Layout>
            <Paper sx={{
                display: "flex",
                flexDirection: {
                    lg: "row",
                    xs: "column",
                },
                padding: 2,
                paddingTop: 4,
            }}
            elevation={0}>
                {/* Image and contact links */}
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: {
                        lg: "35%",
                        xs: "100%",
                    }
                }}>
                    <Box sx={{
                        alignContent: {
                            xs: "center",
                            lg: "left",
                        },
                        textAlign: {
                            xs: "center",
                            lg: "left",
                        }
                    }}>
                        <img src={selfPhoto} alt="andrew piatetsky" width="85%"/>
                    </Box>

                    <Box sx={{
                        width: {
                            lg: "85%",
                            xs: "100%",
                        },
                    }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <Typography variant='subtitle1'>Contact me: ap2356 [at] cornell.edu</Typography>
                        </Box>

                        <Box sx={{
                            padding: 2,
                            display: "flex",
                            flexDirection: "row",
                            gap: 4,
                            justifyContent: "center",
                        }}>
                            <Link href='https://www.linkedin.com/in/apbugs/' color="primary" target="_blank" rel="noreferrer"><LinkedInIcon fontSize='large'/></Link>
                            <Link href='https://github.com/drew-pi' color="primary" target="_blank" rel="noreferrer"><GitHubIcon fontSize='large' /></Link>
                        
                        </Box>
                    </Box>
                </Box>

                {/* Description/blurb */}    
                <Box sx={{
                    width: {
                        lg: "65%",
                        xs: "100%",
                    },
                }}>
                    <Typography sx={{paddingBottom: 3,}}>
                        I'm Andrew, a current student at Cornell University studying computer science and mathematics. In January I started working at <a target="_blank" rel="noreferrer" href="https://sites.google.com/cornell.edu/sunnyjsh/people?authuser=0">Bio-Inspired Fluid Lab </a> with my mentor <a target="_blank" rel="noreferrer" href='https://cals.cornell.edu/sunghwan-sunny-jung'>Dr. Sunghwan "Sunny" Jung </a>. Our focus is on creating computer vision models to track the growth of plants in hydroponic systems to study their efficiency. I am also an active member of the Cornell Competitive Coding team, gearing up for participation in next year's ACM competition.
                    </Typography>
                    <Typography sx={{paddingBottom: 3,}}>
                        In my perspective, computer science and software engineering revolves around solving complex problems. This is the primary reason for my interest in various subfields within computer science, including Artificial Intelligence (AI), Machine Learning (ML), quantum computing, and cybersecurity. Additionally, I closely monitor developments in agritech and fintech, recognizing their potential to bring about revolutionary changes in our world. I am proficient in Python, Java, JavaScript/TypeScript (specifically React.js), OCaml, and tools such as Bash, Linux/Unix, and Git(Hub). I love exploring new programming languages and software packages, while also enhancing my knowledge of the tools I am already familiar with. 
                    </Typography>
                    <Typography sx={{paddingBottom: 3,}}>
                    Outside of my love of computer science and math, I am an avid hiker, skier, and basketball player (despite my average skills). In highschool and middle school, I ran cross country. In college, I run recreationally in the beautiful hills of Ithaca. I also enjoy reading and going to the opera with my family and friends. I am also trilingual - fluent in English and Russian and advanced in French. 
                    </Typography>
                </Box>




            </Paper>
            
        </Layout>
    )
}

export default AboutMe;