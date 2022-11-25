import React from 'react';

import InputDate from '../../../components/FormRegister/Inputs/InputDate';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { TypeBloodOptions } from '../../../components/Selects/DataOptions/DataTypeBlood';
import { SelectInput } from '../../../components/Selects/Select';
import { SelectUf } from '../../../components/Selects/SelectUf';
import { IColumSecondStep } from '../../../interfaces/FormDonatorStep';

const ColumItemRightSecondStep = ({ errors, control }: IColumSecondStep) => (
  <div className="flex flex-col flex-1">
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <InputItem
          htmlFor="cidade"
          textLabel="Cidade"
          placeholder="Cidade em que reside"
          errors={errors}
          control={control}
        />
      </div>

      <SelectUf errors={errors} control={control} htmlFor="uf" textLabel="UF" />
    </div>

    <SelectInput
      errors={errors}
      control={control}
      htmlFor="tiposanguineo"
      placeholder="Qual o seu tipo sanguíneo"
      options={TypeBloodOptions}
      textLabel="Tipo sanguíneo"
      valueMulti={false}
    />
    <div className="mt-[15px]">
      <InputDate
        htmlFor="datadenascimento"
        textLabel="Data de Nascimento"
        errors={errors}
        control={control}
      />
    </div>
  </div>
);

export default ColumItemRightSecondStep;
