import React from 'react';
import InputItem from '../../Inputs/InputItem';
import InputSelect from '../../Inputs/InputSelect';

const ColumItemLeftSecondStep = () => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="cpf"
        placeholder="Digite seu cpf"
        textLabel="CPF"
      />
      <InputItem htmlFor="cep" placeholder="Digite o seu CEP" textLabel="CEP" />


      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <InputItem
            htmlFor="endereco"
            textLabel="Endereço"
            placeholder="Digite a Rua, Número e Bairro"
          />
        </div>
        <InputItem htmlFor="uf" textLabel="UF" placeholder="Digite a UF" />
      </div>
    
    </div>
  );
};

export default ColumItemLeftSecondStep;
