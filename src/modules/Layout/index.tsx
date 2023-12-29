import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import Navbar from '../../components/navbar';
import Header from '../../components/header';

interface LayoutProps {
    children : ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box sx={{
            // backgroundColor: "palette.background.default",
            display: "flex",
            flexDirection: "column",
            color: "#000000",
            overflowY: "hidden",
            height: "100vh",
            marginLeft: "10%",
            marginRight: "10%",
        }}>
            <Header />
            <Navbar />
            <Box sx={{
                width: "100%",
                overflowY: "scroll",
                display: "flex", 
                flexDirection:"row",
                // margin: 2,
                // marginTop: 4,
                }}>{ children }</Box>
        </Box>
    )
}

export default Layout;