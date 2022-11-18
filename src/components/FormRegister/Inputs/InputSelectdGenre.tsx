import {
  FormHelperText,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { Theme, useTheme, styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

const InputSelect = ({
  htmlFor,
  textLabel,
  children,
  errors,
  control,
  placeholder,
}) => {
  const [valueOption, setValueOption] = useState<string>('');
  const handleChange = (event: SelectChangeEvent) => {
    setValueOption(event.target.valueOption as string);
  };

  return (
    <div className="flex flex-col gap-[10px] mb-5">
      <InputLabel
        id="selectInput"
        htmlFor={htmlFor}
        className="font-text font-normal text-x4 leading-[25px] text-roxo800"
      >
        {textLabel}
      </InputLabel>
      <Select
        labelId="selectInput"
        id="selectInput"
        valueOption={valueOption}
        className="font-text font-normal text-x4 leading-[25px] text-roxo800"
        onChange={handleChange}
      >
        <MenuItem valueOption={10}>Ten</MenuItem>
        <MenuItem valueOption={20}>Twenty</MenuItem>
        <MenuItem valueOption={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default InputSelect;

const genres = ['masculino', 'feminino'];

function getStyles(name: string, valueOption: readonly string[], theme: Theme) {
  return {
    fontWeight:
      valueOption.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 7,
    border: '2px solid #bdbdbd',
    fontSize: 18,
    padding: '15px 0px 15px 20px',
    color: '#672557',
    lineHeight: '25px',
    transition: theme.transitions.create(['borderColor']),
    fontFamily: ['Lato', 'Roboto'].join(','),
    '&:focus': {
      borderRadius: 7,
      borderColor: '#672557',
    },
    '&:hover': {
      borderColor: '#672557',
    },
    '&:fieldset': {
      borderColor: '#672557',
    },
  },
}));

const MenuPropsStyle = {
  PaperProps: {
    sx: {
      '& .MuiMenuItem-root.Mui-selected': {
        backgroundColor: '#672557',
      },
      '& .MuiMenuItem-root:hover': {
        backgroundColor: '#cbacc2',
        color: '#fff',
      },
      '& .MuiMenuItem-root.Mui-selected:hover': {
        backgroundColor: '#672557',
        color: '#fff',
      },
    },
  },
};

export function MultipleSelectPlaceholder({
  htmlFor,
  textLabel,
  errors,
  control,
  placeholder,
}) {
  const theme = useTheme();
  const [valueOption, setValueOption] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof valueOption>) => {
    const {
      target: { value },
    } = event;
    setValueOption(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <FormControl className="flex flex-col gap-[10px] mb-5">
      <Controller
        control={control}
        name={htmlFor}
        defaultValue=""
        render={({ field }) => (
          <>
            <label htmlFor={htmlFor}>
              <span className="font-text font-normal text-x4 leading-[25px] text-roxo800">
                {textLabel}
              </span>
            </label>
            <Select
              {...field}
              displayEmpty
              value={valueOption}
              onChange={handleChange}
              input={<BootstrapInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return placeholder;
                }

                return selected.join(', ');
              }}
              MenuProps={MenuPropsStyle}
              inputProps={{ 'aria-label': 'Without label' }}
              error={!!errors.genero}
            >
              <MenuItem disabled value="">
                {placeholder}
              </MenuItem>
              {genres.map((value) => (
                <MenuItem
                  key={value}
                  value={value}
                  style={getStyles(value, valueOption, theme)}
                >
                  {value}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {errors[htmlFor] ? errors[htmlFor].message : ''}
            </FormHelperText>
          </>
        )}
      />
    </FormControl>
  );
}

export const InputSelectdGenre = ({
  htmlFor,
  textLabel,
  errors,
  control,
  placeholder,
}) => (
  <Controller
    control={control}
    name={htmlFor}
    defaultValue=""
    render={({ field }) => (
      <>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{textLabel}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={htmlFor}
            label={htmlFor}
            onChange={handle}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormHelperText>
          {errors[htmlFor] ? errors[htmlFor].message : ''}
        </FormHelperText>
      </>
    )}
  />
);
