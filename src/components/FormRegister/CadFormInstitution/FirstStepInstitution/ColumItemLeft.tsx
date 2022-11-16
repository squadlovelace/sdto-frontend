import { ReactNode } from 'react';
import InputItem from '../../Inputs/InputItem';

export const ColumItemLeft = () => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="cnpj"
        placeholder="Digite o cnpj"
        textLabel="E-mail"
      />
      <InputItem
        htmlFor="cep"
        placeholder="Digite o cep"
        textLabel="Senha"
      />
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
