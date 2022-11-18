import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { Controller } from 'react-hook-form';

export default function BasicSelect({
  htmlFor,
  textLabel,
  errors,
  control,
  placeholder,
}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Controller
          control={control}
          name={htmlFor}
          defaultValue=""
          render={({ field }) => (
            <>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                {...field}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label={textLabel}
                onChange={handleChange}
                error={!!errors[htmlFor]}
              >
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
              </Select>
              <FormHelperText>
                {errors[htmlFor] ? errors[htmlFor].message : ''}
              </FormHelperText>
            </>
          )}
        />
      </FormControl>
    </Box>
  );
}
