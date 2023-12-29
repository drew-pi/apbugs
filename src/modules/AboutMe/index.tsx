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
                            <Link href='https://www.linkedin.com/in/apbugs/' color="primary" target="_blank"><LinkedInIcon fontSize='large'/></Link>
                            <Link href='https://github.com/drew-pi' color="primary" target="_blank"><GitHubIcon fontSize='large' /></Link>
                        
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
                    <Typography>About Me</Typography>
                    <Typography sx={{paddingBottom: 3,}}>Godfather ipsum dolor sit amet. The hotel, the casino. The Corleone Family wants to buy you out. Leave the gun. Take the cannoli. Don Corleone, I am honored and grateful that you have invited me to your home on the wedding day of your daughter. And may their first child be a masculine child. Only don't tell me you're innocent. Because it insults my intelligence and makes me very angry.</Typography>
                    <Typography sx={{paddingBottom: 3,}}>That's my family Kay, that's not me. I see you took the name of the town. What was your father's name? I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here. Vito, how do you like my little angel? Isn't she beautiful? I'm your older brother, Mike, and I was stepped</Typography>
                    <Typography sx={{paddingBottom: 3,}}>I'm gonna make him an offer he can't refuse. I want your answer and the money by noon tomorrow. And one more thing. Don't you contact me again, ever. From now on, you deal with Turnbull. What's the matter with you? Is this what you've become, a Hollywood finocchio who cries like a woman? "Oh, what do I do? What do I do?" What is that nonsense? Ridiculous! Why do you hurt me, Michael? I've always been loyal to you. My father's name was Antonio Andolini... and this is for you</Typography>
                </Box>




            </Paper>
            
        </Layout>
    )
}

export default AboutMe;