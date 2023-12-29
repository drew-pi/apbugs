import { Box, IconButton, ListItemButton, Menu, MenuItem, Typography, Fade, ListItemIcon} from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import SunMoonIcon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../../theme/ThemeContextProvider';

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


const NavbarMobile = () => {

    const { toggleColorMode } = useThemeContext();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleThemeToggle = () => {
        setAnchorEl(null);
        toggleColorMode();

    }

    const { pathname } = useLocation();

    // const [showMenu, setShowMenu] = useState<boolean>(false)

    return (
        <Box sx={{
            display: {
                xs: "block",
                lg: "none",
            }
        }}>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>

            <Menu 
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                {navLinks.map((item) => (
                    <Link key={item.name} to={item.link} style={{textDecoration: "none",}}>
                        <MenuItem onClick={handleClose}>
                            <Typography
                            variant="h4"
                            component="h1"
                            fontWeight={400}
                            fontSize={18}
                            color={pathname === item.link ? "primary" : "secondary"}
                            >
                                {item.name}</Typography>
                        </MenuItem>
                    </Link>
                ))}
                <ListItemButton onClick={handleThemeToggle}>
                    <ListItemIcon>
                        <SunMoonIcon color='secondary'/>
                    </ListItemIcon>
                </ListItemButton>

            </Menu>
        </Box>
    )
}

export default NavbarMobile;