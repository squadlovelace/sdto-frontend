import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import SidebarReceptor from '../../../components/sidebar/sidebarreceptor';
import { SchemaPefilDonator } from '../../../data/yupSchema';
import Avatar from './Avatar';
import BodyPerfilReceptor from './BodyPerfilReceptor';

const EditPerfilReceptor = () => {
  const {
    handleSubmit,
    formState: { errors },

    control,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SchemaPefilDonator),
  });

  const onSubmit = (data) => {
    console.log({ data });

    console.log('deu certo');
  };
  return (
    <div className="flex gap-[90px]">
      <SidebarReceptor />
      <section className="pt-[60px]   pb-[90px] pr-[150] ">
        <Avatar initialLettersUser="US" nameUser="User" typeUser="Receptor" />
        <form className="mt-[75px]  ">
          <BodyPerfilReceptor errors={errors} control={control} />
          <ButtonFormRegister text="Confirmar e salvar" />
        </form>
      </section>
    </div>
  );
};

export default EditPerfilReceptor;
