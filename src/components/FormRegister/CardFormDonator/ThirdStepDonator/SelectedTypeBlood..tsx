import React from 'react';
import InputSelect from '../../Inputs/InputSelect';

const SelectedTypeBlood = () => {
  return (
    <InputSelect
      htmlFor="typeblood"
      textLabel="Tipo Sanguíneo"
      name="typeblood"
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
