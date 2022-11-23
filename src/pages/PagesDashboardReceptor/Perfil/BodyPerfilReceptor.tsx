import React from 'react';

import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import InputITextArea from '../../../components/FormRegister/Inputs/InputITextArea';
import { GenreOptions } from '../../../components/Selects/DataOptions/DataGenre';
import { OrganOptions } from '../../../components/Selects/DataOptions/DataOrgan';
import { UfOptions } from '../../../components/Selects/DataOptions/DataUf';
import { SelectInput } from '../../../components/Selects/Select';

const BodyPerfilReceptor = ({ errors, control }) => (
  <div>
    <div className="flex gap-[60px] ">
      <InputItem
        htmlFor="endereco"
        placeholder="Digite seu endereço"
        textLabel="Endereço"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="cidade"
        placeholder="Digite a cidade em que reside"
        textLabel="Cidade"
        errors={errors}
        control={control}
      />
      <div className="w-[130px] h-[50px]">
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
    <div className="flex gap-[70px]">
      <InputItem
        htmlFor="cep"
        placeholder="Digite seu cep"
        textLabel="CEP"
        errors={errors}
        control={control}
      />
      <InputItem
        htmlFor="Complemento"
        placeholder="Digite o complemento"
        textLabel="Complemento"
        errors={errors}
        control={control}
      />
    </div>
    <div className="flex gap-10">
      <InputItem
        htmlFor="telefone"
        placeholder="(__) _ ____-____"
        textLabel="Telefone"
        errors={errors}
        control={control}
      />
      <div className="h-[50px] w-[250px]">
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
      <div className="w-[360px]">
        <SelectInput
          errors={errors}
          control={control}
          htmlFor="orgao"
          placeholder="Selecione o(s) orgãos necessitados"
          textLabel="Orgão"
          options={OrganOptions}
          valueMulti
        />
      </div>
    </div>
    <InputITextArea
      errors={errors}
      control={control}
      htmlFor="comorbidades"
      placeholder="Digite sua comorbidade"
      textLabel="Comorbidades"
    />
  </div>
);

export default BodyPerfilReceptor;
