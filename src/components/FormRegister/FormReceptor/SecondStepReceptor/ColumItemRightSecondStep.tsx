import React from 'react';
import InputItem from '../../Inputs/InputItem';

const ColumItemRightSecondStep = () => {
  return (
    <div className="flex flex-col flex-1">
    <InputItem
      htmlFor="telefone"
      placeholder="(_ _) _ _ _ _ _ - _ _ _ _ "
      textLabel="Telefone"
    />
    <InputItem
      htmlFor="cidade"
      placeholder="Digite a cidade em que reside"
      textLabel="Cidade"
    />
  </div>
  );
};

export default ColumItemRightSecondStep;
