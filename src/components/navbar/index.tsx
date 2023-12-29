import { Box, Typography, Paper } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    {
        name: "About Me",
        link: "/"
    },
    {
        name: "Projects",
        link: "/projects"
    },    
    {
        name: "Experience",
        link: "/experience"
    },
    {
        name: "Extra",
        link: "/extra"
    },
    {
        name: "Resume",
        link: "/resume"
    }
    
];

const Navbar = () => {
    const { pathname } = useLocation();

    return (
        <Paper sx={{
            // backgroundColor: "palette.background.default",
            padding: 2,
            alignSelf: "center",
            marginTop: "1vh",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            display: {
                xs: "none",
                lg: "block",
            },
        }}>
            <Box sx={{
                justifyContent: "space-between",
                gap: "10vh",
                display: "flex",
                flexDirection: "row",
            }}>
                {navLinks.map((item) => (
                    <Link key={item.name} to={item.link} style={{textDecoration: "none", }}>
                        <Typography
                        variant="h4"
                        component="h1"
                        fontWeight={400}
                        fontSize={18}
                        color={pathname === item.link ? "primary" : "secondary"}
                        >
                            {item.name}
                        </Typography>
                    </Link>
                ))}
            </Box>
        </Paper>

    )
}

export default Navbar;