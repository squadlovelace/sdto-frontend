import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

import {
  customStyles,
  theme,
} from '../../../components/FormRegister/Inputs/customStylesSelect';
import { SelectThirdStep } from '../../../interfaces/FormDonatorStep';
import { TypeBloodOptions } from './DataOptions/DataTypeBlood';

const SelectedTypeBlood = ({
  errors,
  control,
  htmlFor,
  textLabel,
}: SelectThirdStep) => (
  <div className="flex flex-col gap-[10px] mb-5">
    <Controller
      control={control}
      name="tiposanguineo"
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
            classNamePrefix="type blood"
            isClearable
            isRtl={false}
            placeholder="Qual é o seu tipo saguíneo?"
            isSearchable
            options={TypeBloodOptions}
            styles={customStyles}
            theme={theme}
            {...field}
          />

          <FormHelperText className="text-[#db0000]  absolute top-[380px]">
            {errors.tiposanguineo ? errors.tiposanguineo.message : ''}
          </FormHelperText>
        </>
      )}
    />
  </div>
);

export default SelectedTypeBlood;
