import React from 'react';
import InputDate from '../../Inputs/InputDate';
import InputItem from '../../Inputs/InputItem';

const ColumItemRightSecondStep = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className="grid grid-cols-2 gap-4">
          <InputItem
            htmlFor="crm"
            textLabel="CRM"
            placeholder="Digite o CRM caso possua"
          />
          <InputItem
            htmlFor="telefone"
            placeholder="(_ _) _ _ _ _ _ - _ _ _ _ "
            textLabel="Telefone"
          />
      </div>

      <div className="grid grid-cols-2 gap-4">
          <InputItem
            htmlFor="cidade "
            textLabel="Cidade"
            placeholder="Digite a cidade que reside"
          />
          <InputItem
            htmlFor="rg"
            placeholder="Digite seu RG "
            textLabel="RG"
          />
      </div>

      <div className="grid grid-cols-1 gap-4">

          <InputItem
              htmlFor="COMPLEMENTO"
              textLabel="Complemento"
              placeholder="Digite o complemento"
          />
      </div>

   
      
    </div>
  );
};

export default ColumItemRightSecondStep;
