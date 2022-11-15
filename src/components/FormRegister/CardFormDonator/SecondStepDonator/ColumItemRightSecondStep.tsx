import React from 'react';
import InputDate from '../../Inputs/InputDate';
import InputItem from '../../Inputs/InputItem';

const ColumItemRightSecondStep = ({ errors, control }) => {
  return (
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
        <InputItem
          htmlFor="uf"
          textLabel="UF"
          placeholder="Digite a UF"
          errors={errors}
          control={control}
        />
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
};

export default ColumItemRightSecondStep;
