import { Box, Typography } from '@mui/material';
import React from 'react';

import moonIcon from "../../../assets/icons/m2.svg";
import sunIcon from "../../../assets/icons/sun.svg";

const Header = () => {
    return (
            <Box sx={{
                display: "flex",
                flexDirection: 'row',
                width: "100%",
                borderBottom: "3px double black",

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
                    >
                        Andrew Piatetsky
                    </Typography>
                    <Typography sx={{
                        padding: 1,
                    }}>
                        Freshman at Cornell University
                    </Typography>
                </Box>

                <Box sx={{
                    margin: 1,
                    width: "30%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    {/* Use Font awsome: https://www.youtube.com/watch?v=y0LwoUi_Kcw, https://fontawesome.com/docs/apis/javascript/get-started */}
                </Box>
            </Box>

        

    )
}

export default Header;