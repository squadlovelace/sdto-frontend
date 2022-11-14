import React from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { InputProps } from '../../../../interfaces/inputs';
import InputSelect from '../../Inputs/InputSelect';

const SelectGenre = () => {
  const { register } = useForm<InputProps>();

  return (
    <InputSelect htmlFor="genero" textLabel="Gênero" register={register}>
      <option disabled value="default">
        Qual é o seu gênero
      </option>
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
    </InputSelect>
  );
};

export default SelectGenre;
