import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { InputSelectProps } from '../../../interfaces/inputs';

const InputSelect = ({ htmlFor, textLabel, children }: InputSelectProps) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    /*     <div className="flex flex-col gap-[10px] mb-5">
      <label
        htmlFor={htmlFor}
        className="font-text font-normal text-x4 leading-[25px] text-roxo800"
      >
        {textLabel}
      </label>
      <select
        id={htmlFor}
        defaultValue="default"
        className="bg-white border-2  rounded-[7px] border-[#DBDBDB] focus:outline-none focus:ring-roxo500 focus:border-roxo500 focus:border-2 font-text font-normal text-x4 leading-[25px] p-[18px] py-[11px] text-roxo500
        "
      >
        {children}
      </select>
    </div> */

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Genero"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default InputSelect;
