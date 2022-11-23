import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { customStyles, theme } from './customStylesSelect';
import { GenreOptions } from './DataOptions/DataGenre';

export const SelectGenre = ({ errors, control, htmlFor, textLabel }) => (
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
            className="bg-white font-text font-normal text-x4 text-roxo500 "
            classNamePrefix="genero"
            isClearable
            isRtl={false}
            placeholder="Qual é o seu gênero?"
            isSearchable
            options={GenreOptions}
            styles={customStyles}
            theme={theme}
            {...field}
          />

          <FormHelperText className="text-[#db0000]">
            {errors.genero ? errors.genero.message : ''}
          </FormHelperText>
        </>
      )}
    />
  </div>
);
