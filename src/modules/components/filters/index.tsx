import { Box, Typography, Checkbox, FormGroup, FormControlLabel, ButtonBase} from '@mui/material';
import { styled } from '@mui/material/styles'
import React, {useState} from 'react';



const ViewMoreButton = styled(ButtonBase)(({ theme }) => ({
    paddingTop: 5,
    borderTop: "1px solid black",
    width: "100%",
    textAlign: "start",
    justifyContent: "flex-start",
}));


interface Props {
    filters: string[],
    // setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>,
    setActiveFilters: (newItem: string) => void,
}


// const FilterElement = ({ filters }: Filters, { setActiveFilters }: { setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>}) => {
const FilterElement = ({props}: {props: Props}) => {

    var {filters, setActiveFilters} = props

    // for state changes so can react to whether view more button was clicked or not
    const [viewMore, setViewMore] = useState<boolean>(false)

    if (!viewMore) {
        filters = filters.slice(0,6)
    }

    return (
        <Box sx={{
            width: "fit-content",
            padding: 3,
            position: "sticky!important",
            maxWidth: "14%", // possibly comment out because might cause issues with smaller screens
        }}>
            <Typography sx={{borderBottom: "1px solid black",}}>Filters</Typography>
            <Box>
                <FormGroup>
                    {filters.map((item) => ( 
                        <FormControlLabel control={<Checkbox sx={{padding: 1,}} 
                        onChange={() => setActiveFilters(item)}
                        />} label={item} />
                    ))}
                </FormGroup>
            </Box>
            <ViewMoreButton onClick={() => setViewMore(prev=>!prev)} disableRipple>
                <Typography sx={{fontWeight: "bold",fontSize:"95%",}}>{viewMore ? "View Less" : "View More"}</Typography>
            </ViewMoreButton>

        </Box>
    )
}

export default FilterElement;