import { Box, Typography, Checkbox, FormGroup, FormControlLabel, ButtonBase, Paper} from '@mui/material';
import { styled } from '@mui/material/styles'
import React, {useState} from 'react';
import { useThemeContext } from '../../theme/ThemeContextProvider';



const ViewMoreButton = styled(ButtonBase)(({ theme }) => ({
    paddingTop: 5,
    borderTop: "1px solid",
    borderTopColor: `${theme.palette.text.primary}`,
    width: "100%",
    textAlign: "start",
    justifyContent: "flex-start",
    color: "#C56B3B",
}));


interface Props {
    filters: string[],
    // setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>,
    setActiveFilters: (newItem: string) => void,
}


// const FilterElement = ({ filters }: Filters, { setActiveFilters }: { setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>}) => {
const FilterElement = ({props}: {props: Props}) => {

    const { theme } = useThemeContext()

    var {filters, setActiveFilters} = props

    // for state changes so can react to whether view more button was clicked or not
    const [viewMore, setViewMore] = useState<boolean>(false)

    if (!viewMore) {
        filters = filters.slice(0,6)
    }

    return (
        <Paper elevation={0} sx={{
            display: {
                xs: "none",
                lg: "block",
            },
            width: "fit-content",
            margin: 3,
            position: "sticky!important",
            maxWidth: "14%", // possibly comment out because might cause issues with smaller screens
        }}>
            <Typography sx={{borderBottom: "1px solid",}}>Filters</Typography>
            <Box>
                <FormGroup>
                    {filters.map((item) => ( 
                        <FormControlLabel control={<Checkbox color={'primary'}sx={{padding: 1}} 
                        onChange={() => setActiveFilters(item)}
                        />} label={item} key={item} />
                    ))}
                </FormGroup>
            </Box>
            <ViewMoreButton onClick={() => setViewMore(prev=>!prev)} disableRipple theme={theme}>
                <Typography sx={{fontWeight: "bold",fontSize:"95%",}}>{viewMore ? "View Less" : "View More"}</Typography>
            </ViewMoreButton>
        </Paper>
    )
}

export default FilterElement;