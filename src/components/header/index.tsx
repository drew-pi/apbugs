import { Box, Typography, ButtonBase } from '@mui/material';
import React from 'react';

import SunMoonIcon from '@mui/icons-material/Brightness7';
import NavbarMobile from '../navbarMobile';

import { useThemeContext } from '../../theme/ThemeContextProvider';

const Header = () => {
    const { toggleColorMode } = useThemeContext();

    return (
            <Box sx={{
                display: "flex",
                flexDirection: 'row',
                width: "100%",
                borderBottom: "3px double",
            }}>
                <Box sx={{
                    padding: 2,
                    width: "70%",
                }}>
                    <Typography sx={{
                        padding: 1,
                    }}
                    variant="h1"
                    fontWeight={500}
                    fontSize={25}
                    color="primary"
                    >
                        Andrew Piatetsky
                    </Typography>
                    <Typography sx={{
                        padding: 1,
                    }}
                    color="secondary">
                        Freshman at Cornell University
                    </Typography>
                </Box>

                <Box sx={{
                        width: "30%",
                        alignContent: "flex-end",
                        textAlign: "end",
                        margin: "auto",
                        paddingRight: 2,
                    }}>
                        <ButtonBase sx={{
                                display: {
                                    xs: "none",
                                    lg: "block",
                                },
                                float: "right",
                                color: "text.primary",
                            }} 
                            disableRipple
                            onClick={toggleColorMode}
                            >
                            <SunMoonIcon />
                        </ButtonBase>
                        <NavbarMobile />
                </Box>

                    
            </Box>

        

    )
}

export default Header;