import { FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';
import Select from 'react-select';

import { SelectThirdStep } from '../../interfaces/FormDonatorStep';
import { customStyles, theme } from './customStylesSelect';
import { TypeDonatorOptions } from './DataOptions/DataTypeDoador';

const SelectedTypeDonator = ({
  errors,
  control,
  htmlFor,
  textLabel,
}: SelectThirdStep) => (
  <div className="flex flex-col gap-[10px] mb-5">
    <Controller
      control={control}
      name="tipodedoador"
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
            classNamePrefix="tipoDoador"
            placeholder="Tipo de doador"
            isSearchable
            options={TypeDonatorOptions}
            styles={customStyles}
            theme={theme}
            {...field}
          />

          <FormHelperText className="text-[#db0000] absolute top-[380px]">
            {errors.tipodedoador ? errors.tipodedoador.message : ''}
          </FormHelperText>
        </>
      )}
    />
  </div>
);

export default SelectedTypeDonator;