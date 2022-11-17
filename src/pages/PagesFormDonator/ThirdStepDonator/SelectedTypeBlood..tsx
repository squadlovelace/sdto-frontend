import { useState } from 'react';
import Select from 'react-select';
import {
  customStyles,
  theme,
} from '../../../components/FormRegister/Inputs/customStylesSelect';
import { TypeBloodOptions } from './DataOptions/DataTypeBlood';

const SelectedTypeBlood = ({ errors, control, htmlFor, textLabel }) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  return (
    <div className="flex flex-col gap-[10px] mb-5">
      <label
        htmlFor={htmlFor}
        className="font-text font-normal text-x4 leading-[25px] text-roxo800"
      >
        {textLabel}
      </label>
      <Select
        className="bg-white font-text font-normal text-x4 text-roxo500 "
        classNamePrefix="genero"
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        placeholder="Qual é o seu tipo sanguíneo?"
        isSearchable={isSearchable}
        name="genero"
        options={TypeBloodOptions}
        styles={customStyles}
        theme={theme}
      />
    </div>
  );
};

export default SelectedTypeBlood;
