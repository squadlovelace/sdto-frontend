import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import ButtonFormRegister from '../../components/Buttons/ButtonFormRegister';
import InputItem from '../../components/FormRegister/Inputs/InputItem';
import { schemaInstituition } from '../../data/yupSchemaInstituition';
import HeaderEditReceptor from './HeaderEditReceptor';

const EditPerfilInstituition = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaInstituition),
  });

  const onSubmit = (data) => {
    console.log({ data });

    console.log('deu certo');
    reset();
  };
  return (
    <div className="flex-grow">
      <HeaderEditReceptor title="Almelo" type="Instituição" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-grow w-[calc(100vw-400px)] pr-[200px]"
      >
        <div className="flex gap-[50px]   ">
          <div className="flex-1">
            <InputItem
              errors={errors}
              control={control}
              htmlFor="endereco"
              placeholder="Digite o seu endereço"
              textLabel="Endereço"
            />
          </div>
          <div className="flex-1">
            <InputItem
              errors={errors}
              control={control}
              htmlFor="cidade"
              placeholder="Digite a sua cidade"
              textLabel="Cidade/Munícipio"
            />
          </div>
        </div>
        <div className="justify-self-start self-start flex-1 w-[27vw]">
          <InputItem
            errors={errors}
            control={control}
            htmlFor="cep"
            placeholder="Digite o seu Cep"
            textLabel="CEP"
          />
        </div>

        <div className="justify-self-end self-end">
          <ButtonFormRegister text="Confirmar e salvar" />
        </div>
      </form>
    </div>
  );
};
export default EditPerfilInstituition;
