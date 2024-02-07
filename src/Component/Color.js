import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Data from '../Data/Data';
import { ProductContext } from './ProductContext';

export default function Color() {
    const { item, setItem } = React.useContext(ProductContext);
    const [selectedValue, setSelectedValue] = React.useState('')
    const handleChange = (event) => {
        setSelectedValue(event.target.value)
        const filterData = Data.filter((elem) => {
            return elem.color === event.target.value
        })
        setItem(filterData);

    }


    return (
        <FormControl>
            <RadioGroup
                value={selectedValue}
                onChange={handleChange}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="red" control={<Radio size='small' style={{ color: 'red' }} />} label="Red" />
                <FormControlLabel value="green" control={<Radio size='small' style={{ color: 'green' }} />} label="Green" />
                <FormControlLabel value="blue" control={<Radio size='small' style={{ color: 'blue' }} />} label="Blue" />
                <FormControlLabel value="black" control={<Radio size='small' style={{ color: 'black' }} />} label="Black" />
                <FormControlLabel value="white" control={<Radio size='small' style={{ color: 'white' }} />} label="White" />
            </RadioGroup>
        </FormControl>
    );
}