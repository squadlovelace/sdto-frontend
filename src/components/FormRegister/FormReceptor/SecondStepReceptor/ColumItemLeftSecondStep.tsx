import React from 'react';
import InputDate from '../../Inputs/InputDate';
import InputItem from '../../Inputs/InputItem';
import InputSelect from '../../Inputs/InputSelect';

const ColumItemLeftSecondStep = () => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="rg"
        placeholder="Digite seu RG"
        textLabel="RG"
      />
      <InputItem
        htmlFor="cpf"
        placeholder="Digite seu CPF"
        textLabel="CPF"
      />
      <InputDate htmlFor="birthday" textLabel="Data de Nascimento" />
    </div>
  );
};

export default ColumItemLeftSecondStep;
