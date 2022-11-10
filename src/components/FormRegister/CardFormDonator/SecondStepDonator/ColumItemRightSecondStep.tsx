import React from 'react';
import InputDate from '../../Inputs/InputDate';
import InputItem from '../../Inputs/InputItem';

const ColumItemRightSecondStep = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <InputItem
            htmlFor="cidade"
            textLabel="Cidade"
            placeholder="Digite a cidade em que reside"
          />
        </div>
        <InputItem htmlFor="uf" textLabel="UF" placeholder="Digite a UF" />
      </div>

      <InputItem
        htmlFor="COMPLEMENTO"
        textLabel="Complemento"
        placeholder="Digite o complemento"
      />
      <InputDate htmlFor="birthday" textLabel="Data de Nascimento" />
    </div>
  );
};

export default ColumItemRightSecondStep;
