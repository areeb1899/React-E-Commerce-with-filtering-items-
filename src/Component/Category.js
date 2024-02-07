import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ProductContext } from './ProductContext';
import Data from '../Data/Data';


export default function Category() {
  const { item, setItem } = React.useContext(ProductContext);
  const [ selectedValue, setSelectedValue ] = React.useState('')
  const handleChange = (event) => {
    setSelectedValue(event.target.value)
    if (event.target.value === "All") {
      setItem(Data);
    } else {
      const filterData = Data.filter((elem) => {
        return elem.category === event.target.value
      })
      setItem(filterData);
    }
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
        <FormControlLabel value="All" control={<Radio size='small' />} label="All" />
        <FormControlLabel value="sneakers" control={<Radio size='small' />} label="Sneakers" />
        <FormControlLabel value="flats" control={<Radio size='small' />} label="Flats" />
        <FormControlLabel value="sandals" control={<Radio size='small' />} label="Sandals" />
        <FormControlLabel value="heels" control={<Radio size='small' />} label="Heels" />
      </RadioGroup>
    </FormControl>
  );
}