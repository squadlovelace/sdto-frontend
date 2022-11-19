import React from 'react';

import InputDate from '../../../components/FormRegister/Inputs/InputDate';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { IColumSecondStep } from '../../../interfaces/FormDonatorStep';
import { SelectUf } from './SelectUf';

const ColumItemRightSecondStep = ({ errors, control }: IColumSecondStep) => (
  <div className="flex flex-col flex-1">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <InputItem
          htmlFor="cidade"
          textLabel="Cidade"
          placeholder="Digite a cidade em que reside"
          errors={errors}
          control={control}
        />
      </div>
      <SelectUf errors={errors} control={control} htmlFor="uf" textLabel="UF" />
    </div>

    <InputItem
      htmlFor="complemento"
      textLabel="Complemento"
      placeholder="Digite o complemento"
      errors={errors}
      control={control}
    />
    <InputDate
      htmlFor="datadenascimento"
      textLabel="Data de Nascimento"
      errors={errors}
      control={control}
    />
  </div>
);

export default ColumItemRightSecondStep;
