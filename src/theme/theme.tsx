import { PaletteMode, ThemeOptions } from "@mui/material";

const white = "#FFF"
const black = "#000"

const copper = "#C56B3B"
const millbrook = "#5E3E34" // brown color
const mineshaft = "#3E3E3E" // background gray
const martini = "#Ad9d99" // secondary color dark mode


declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true; 
        sm: false; // removes the `sm` breakpoint
        md: false; // removes the `md` breakpoint
        lg: true;
        xl: false; // removes the `xl` breakpoint
    }
}


const constantTheme: ThemeOptions = {
    breakpoints: {
        values: {
            xs: 0,
            lg: 900,
        },
    },
    typography: {
        fontFamily: 'Noto Serif, serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: ({ palette }) => {
            // console.log("palette " + JSON.stringify(palette, null, 2))
            return (   
            `
                @font-face {
                    font-family: 'Noto Serif';
                    font-style: normal;
                    font-weight: 400;
                    font-stretch: 100%;
                    font-display: swap;
                    src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTx8cKpKrCzi0i.woff2) format('woff2');
                    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                }
                /* latin-ext */
                @font-face {
                    font-family: 'Noto Serif';
                    font-style: normal;
                    font-weight: 400;
                    font-stretch: 100%;
                    font-display: swap;
                    src: url(https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCTyccKpKrCzi0iNaA.woff2) format('woff2');
                    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                }
                // body {
                //     background-color: "${palette.background.default}!important";
                //   }
            `)
            }
        },
    },
}


const lightModePalette = {
    mode: 'light' as PaletteMode,
    primary: {
        // main: '#c56b3b', // copper
        main: copper,
    },
    secondary: {
        // main: '#5e3e34', // millbrook
        main: millbrook,
    },
    background: {
        // default: '#ffffff', //white
        // paper: '#ffffff', // white
        default: white,
        paper: white,
    },
    text: {
        // primary: '#000000', // black
        primary: black,
    },
}


const darkModePalette = {
    mode: 'dark' as PaletteMode,
    primary: {
        // main: '#c56b3b', // copper
        main: copper,
    },
    secondary: {
        // main: '#ad9d99', // martini
        main: martini,
    },
    background: {
        // default: '#3e3e3e', // mineshaft
        // paper: '#3e3e3e',
        default: mineshaft,
        paper: mineshaft,
    },
    text: {
        // primary: '#ffffff', // white
        primary: white,
    },
}

const theme = {
    ...lightModePalette,
    ...constantTheme,
};


export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      ...(mode === 'light'
        ? {...lightModePalette}
        : {...darkModePalette}),
    },
    ...constantTheme,
});

export default theme;