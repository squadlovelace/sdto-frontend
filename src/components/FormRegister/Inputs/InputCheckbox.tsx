import { FormControlLabel, FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

interface Props {
  htmlFor: string;
  textLabel: string;
  nameInput: string;
}

const formControlLabelStyle = {
  '& .MuiFormControlLabel-label': {
    fontSize: '14px',
    fontFamily: ['Lato', 'sans-serif'],
    fontWeight: 700,
    lineHeight: '25px',
    color: '#672557',
  },
};
const InputCheckbox = ({ htmlFor, textLabel, errors, control }) => (
  <div className="flex gap-3 mt-[0px] ">
    <FormControlLabel
      sx={{ ...formControlLabelStyle }}
      control={
        <Controller
          name={htmlFor}
          control={control}
          render={({ field }) => <Checkbox {...field} />}
          defaultValue={false}
        />
      }
      label={textLabel}
      className="mt-[-70px]"
    />
    <FormHelperText className="text-[#db0000] absolute bottom-[400px]">
      {errors[htmlFor] ? errors[htmlFor].message : ''}
    </FormHelperText>
  </div>
);

export default InputCheckbox;
