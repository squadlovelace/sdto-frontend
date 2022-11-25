import React from 'react';

import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import { GenreOptions } from '../../../components/Selects/DataOptions/DataGenre';
import { UfOptions } from '../../../components/Selects/DataOptions/DataUf';
import { SelectInput } from '../../../components/Selects/Select';

const BodyPerfilDoador = ({ errors, control }) => (
  <div className="flex justify-between gap-[50px]  w-[65vw]">
    <div className="flex-1">
      <InputItem
        htmlFor="endereco"
        placeholder="Digite seu endereço"
        textLabel="Endereço"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="cep"
        placeholder="Digite seu cep"
        textLabel="CEP"
        errors={errors}
        control={control}
      />

      <InputItem
        htmlFor="telefone"
        placeholder="(__) _ ____-____"
        textLabel="Telefone"
        errors={errors}
        control={control}
      />
    </div>
    <div className="flex-1">
      <div className="flex gap-3">
        <div className="flex-grow">
          <InputItem
            htmlFor="cidade"
            placeholder="Digite a cidade em que reside"
            textLabel="Cidade"
            errors={errors}
            control={control}
          />
        </div>
        <div className="w-[120px] flex-1">
          <SelectInput
            errors={errors}
            control={control}
            htmlFor="uf"
            placeholder="UF"
            textLabel="UF"
            options={UfOptions}
            valueMulti={false}
          />
        </div>
      </div>

      <InputItem
        htmlFor="complemento"
        placeholder="Digite o complemento"
        textLabel="Complemento"
        errors={errors}
        control={control}
      />

      <SelectInput
        errors={errors}
        control={control}
        htmlFor="genero"
        placeholder="Qual é o seu gênero"
        textLabel="Gênero"
        options={GenreOptions}
        valueMulti={false}
      />
    </div>
  </div>
);

export default BodyPerfilDoador;
