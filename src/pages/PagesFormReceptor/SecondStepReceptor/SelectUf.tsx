import { useState } from 'react';
import Select from 'react-select';
import {
  customStyles,
  theme,
} from '../../../components/FormRegister/Inputs/customStylesSelect';

import { Controller } from 'react-hook-form';
import { UfOptions } from './DataUf';

export const SelectUf = ({ errors, control, htmlFor, textLabel }) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
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
              className="bg-white font-text font-normal text-x3 text-roxo500 "
              classNamePrefix="genero"
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              placeholder="UF"
              isSearchable={isSearchable}
              options={UfOptions}
              styles={customStyles}
              theme={theme}
              {...field}
            />
            <span className="absolute text-red-600  text-[12px] top-[382px] right-[440px] ">
              {errors['uf']?.message}
            </span>
          </>
        )}
      />
    </div>
  );
};
