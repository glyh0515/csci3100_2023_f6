import * as React from 'react';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'

  export default function TermSelect(){
    const [term, setTerm] = React.useState('');

    const handleChange = (event) => {
      setTerm(event.target.value);
    };

    return(
      <FormControl sx={{ width: '25%' }}>
        <InputLabel id="select-term">Select Term</InputLabel>
        <Select
          labelId="select-term"
          id="Button-term"
          value={term}
          label="Term"
          onChange={handleChange}
      >
        <MenuItem value={10}>2022-2023 Term1</MenuItem>
        <MenuItem value={20}>2021-2022 Term2</MenuItem>
        <MenuItem value={30}>2021-2022 Term1</MenuItem>
      </Select>
    </FormControl>
    );
}
