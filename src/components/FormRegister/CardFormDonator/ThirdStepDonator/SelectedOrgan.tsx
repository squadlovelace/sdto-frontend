import React from 'react';
import { useForm } from 'react-hook-form';
import { InputProps } from '../../../../interfaces/inputs';
import InputSelect from '../../Inputs/InputSelect';

const SelectedOrgan = () => {
  const { register } = useForm<InputProps>();

  return (
    <InputSelect
      htmlFor="organ"
      textLabel="Orgão"
      name="organ"
      register={register}
    >
      <option disabled value="default">
        Qual é o seu tipo sanguineo
      </option>
      <option value="coracao">Coração</option>
      <option value="rim">Rim</option>
    </InputSelect>
  );
};

export default SelectedOrgan;
