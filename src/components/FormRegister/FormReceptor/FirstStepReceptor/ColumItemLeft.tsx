import { ReactNode } from 'react';
import InputItem from '../../Inputs/InputItem';

export const ColumItemLeft = () => {
  return (
    <div className="flex flex-col flex-1">
      <InputItem
        htmlFor="email"
        placeholder="Digite o seu e-mail"
        textLabel="E-mail"
      />
      <InputItem
        htmlFor="senha"
        placeholder="Digite a sua senha"
        textLabel="Senha"
      />
      <InputItem
        htmlFor="RG"
        placeholder="Digite os digitos do se RG"
        textLabel="RG"
      />
    </div>
  );
};
