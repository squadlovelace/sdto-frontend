import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Controller } from 'react-hook-form';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const genres = ['masculino', 'feminino'];

function getStyles(value: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function InputSelect({
  errors,
  control,
  htmlFor,
  textLabel,
  placeholder,
}) {
  const theme = useTheme();
  const [valueOptions, SetValueOptiosn] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof valueOptions>) => {
    const {
      target: { value },
    } = event;
    SetValueOptiosn(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <div>
      <FormControl>
        <Controller
          control={control}
          name={htmlFor}
          defaultValue=""
          render={({ field }) => (
            <>
              <Select
                {...field}
                displayEmpty
                value={valueOptions}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Placeholder</em>;
                  }

                  return selected.join(', ');
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
                error={!!errors[htmlFor]}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                {genres.map((value) => (
                  <MenuItem
                    key={value}
                    value={value}
                    style={getStyles(value, valueOptions, theme)}
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
    </div>
  );
}
