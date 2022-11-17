import Select from 'react-select';
import {
  customStyles,
  theme,
} from '../../../components/FormRegister/Inputs/customStylesSelect';
import { OrganOptions } from './DataOptions/DataOrgan';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const SelectOrgan = ({ errors, control, htmlFor, textLabel }) => {
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
        components={animatedComponents}
        defaultValue={OrganOptions[0]}
        placeholder="Qual é o orgão que você nessecita?"
        name="genero"
        options={OrganOptions}
        styles={customStyles}
        theme={theme}
        isMulti
      />
    </div>
  );
};

export default SelectOrgan;
