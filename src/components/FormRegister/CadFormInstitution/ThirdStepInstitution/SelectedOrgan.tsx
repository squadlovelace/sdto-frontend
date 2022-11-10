import React from 'react';
import InputSelect from '../../Inputs/InputSelect';

const SelectedOrgan = () => {
  return (
    <InputSelect htmlFor="organ" textLabel="Orgão" name="organ">
      <option disabled value="default">
        Qual é o seu tipo sanguineo
      </option>
      <option value="coracao">Coração</option>
      <option value="rim">Rim</option>
    </InputSelect>
  );
};

export default SelectedOrgan;
