import { Box, Typography } from '@mui/material';
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
        <Box sx={{
            backgroundColor: "white",
            padding: 2,
            alignSelf: "center",
            marginTop: "1vh",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
        }}>
            <Box sx={{
                justifyContent: "space-between",
                gap: "10vh",
                color: "#5E3E34",
                display: "flex",
                flexDirection: "row",
            }}>
                {navLinks.map((item) => (
                    <Link key={item.name} to={item.link} style={{textDecoration: "none", 
                    color: `${pathname === item.link ? "#C56B3B" : "#5E3E34"}`,
                    }}>
                        <Typography
                        variant="h4"
                        component="h1"
                        fontWeight={400}
                        fontSize={18}
                        >
                            {item.name}</Typography>
                    </Link>
                ))}
            </Box>

        </Box>

    )
}

export default Navbar;