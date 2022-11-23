import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { customStyles, theme } from './customStylesSelect';

export const SelectInput = ({
  errors,
  control,
  htmlFor,
  textLabel,
  options,
  placeholder,
  valueMulti,
}) => (
  <div className="flex flex-col gap-[10px] mb-5">
    <Controller
      control={control}
      name={htmlFor}
      defaultValue=""
      render={({ field }) => (
        <>
          <label
            htmlFor={htmlFor}
            className="font-text font-normal text-x4 leading-[25px] text-roxo800"
          >
            {textLabel}
          </label>
          <Select
            isMulti={valueMulti}
            placeholder={placeholder}
            isClearable
            isSearchable
            options={options}
            styles={customStyles}
            theme={theme}
            className="bg-white font-text font-normal text-x4 text-roxo500 "
            classNamePrefix="value"
            isRtl={false}
            {...field}
          />

          <FormHelperText className="text-[#db0000]">
            {errors[htmlFor] ? errors[htmlFor].message : ''}
          </FormHelperText>
        </>
      )}
    />
  </div>
);
