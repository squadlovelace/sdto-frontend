import React from 'react';

import InputDate from '../../../components/FormRegister/Inputs/InputDate';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumSecondStep } from '../../../interfaces/FormDonatorStep';
import { SelectUf } from './SelectUf';

const ColumItemRightSecondStep = ({ errors, control }: IColumSecondStep) => (
  <div className="flex flex-col flex-1">
      <InputItem
          htmlFor="confirmarEmail"
          textLabel="Confirmar E-mail"
          placeholder="Digite seu e-mail novamente"
          errors={errors}
          control={control}
      />
      <InputItem
        htmlFor="confirmarSenha"
        textLabel="Confirmar Senha"
        placeholder="Digite sua senha novamente"
        errors={errors}
        control={control}
      />
        <InputItem
        htmlFor="rg"
        textLabel="RG"
        placeholder="Digite seu RG"
        errors={errors}
        control={control}
      />
   
  </div>
);

export default ColumItemRightSecondStep;
