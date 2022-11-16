import React from 'react';
import InputItem from '../../Inputs/InputItem';
import InputSelect from '../../Inputs/InputSelect';

const ColumItemLeftSecondStep = () => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="endereco"
        placeholder="Digite seu endereço"
        textLabel="Endereço"
      />
      <InputItem htmlFor="cep" placeholder="Digite o seu CEP" textLabel="CEP" />
      <InputItem
        htmlFor="telefone"
        placeholder="(__) _ ____-____"
        textLabel="Telefone"
      />
      <InputSelect htmlFor="genero" textLabel="Gênero" name="genre">
        <option disabled value="default">
          Qual é o seu gênero
        </option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
      </InputSelect>
    </div>
  );
};

export default ColumItemLeftSecondStep;
