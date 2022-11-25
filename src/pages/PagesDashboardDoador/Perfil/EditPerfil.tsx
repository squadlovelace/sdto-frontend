import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import SidebarDoador from '../../../components/sidebar/sidebardoador';
import { PerilEditDonator, SchemaPefilDonator } from '../../../data/yupSchema';
import Avatar from './Avatar';
import BodyPerfilDoador from './BodyPerfilDoador';

const EditPerfilDoador = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(PerilEditDonator),
  });

  const onSubmit = (data) => {
    console.log({ data });

    console.log('deu certo');
    reset();
  };
  return (
    <div className="flex gap-[90px]">
      <SidebarDoador />
      <section className="pt-[60px]   pb-[90px] ">
        <Avatar initialLettersUser="US" nameUser="User" typeUser="Receptor" />
        <form
          className="mt-[75px]  flex flex-col "
          onSubmit={handleSubmit(onSubmit)}
        >
          <BodyPerfilDoador errors={errors} control={control} />

          <div className="justify-self-end self-end">
            <ButtonFormRegister text="Confirmar e salvar" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditPerfilDoador;
