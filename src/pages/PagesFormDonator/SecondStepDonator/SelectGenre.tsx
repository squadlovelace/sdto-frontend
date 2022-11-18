import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

import {
  customStyles,
  theme,
} from '../../../components/FormRegister/Inputs/customStylesSelect';
import { SelectSecondStep } from '../../../interfaces/FormDonatorStep';
import { GenreOptions } from './DataGenre';

export const SelectGenre = ({
  errors,
  control,
  htmlFor,
  textLabel,
}: SelectSecondStep) => (
  <div className="flex flex-col gap-[10px] mb-5">
    <Controller
      control={control}
      name="genero"
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
            isDisabled
            isLoading
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
