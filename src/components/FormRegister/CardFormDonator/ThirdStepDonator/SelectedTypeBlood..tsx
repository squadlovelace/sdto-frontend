import React from 'react';
import { useForm } from 'react-hook-form';
import { InputProps } from '../../../../interfaces/inputs';
import InputSelect from '../../Inputs/InputSelect';

const SelectedTypeBlood = () => {
  const { register } = useForm<InputProps>();

  return (
    <InputSelect
      htmlFor="typeblood"
      textLabel="Tipo Sanguíneo"
      name="typeblood"
      register={register}
    >
      <option disabled value="default">
        Qual é o seu tipo sanguineo
      </option>
      <option value="a+">a+</option>
      <option value="a-">a-</option>
    </InputSelect>
  );
};

export default SelectedTypeBlood;
