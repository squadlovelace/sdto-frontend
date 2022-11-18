import React from 'react';

import InputDate from '../../../components/FormRegister/Inputs/InputDate';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { SelectUf } from './SelectUf';

const ColumItemRightSecondStep = ({ errors, control }) => (
  <div className="flex flex-col flex-1">
    

    <InputItem
      htmlFor="confirmarEmail"
      textLabel="Confirmar E-mail"
      placeholder="Digite o email novamente"
      errors={errors}
      control={control}
    />
     <InputItem
      htmlFor="confirmarSenha"
      textLabel="Confirmar senha"
      placeholder="Digite sua senha novamente"
      errors={errors}
      control={control}
    />
       <InputItem
      htmlFor="rg"
      textLabel="Confirmar Senha"
      placeholder="Digite sua senha"
      errors={errors}
      control={control}
    />

  </div>
);

export default ColumItemRightSecondStep;
