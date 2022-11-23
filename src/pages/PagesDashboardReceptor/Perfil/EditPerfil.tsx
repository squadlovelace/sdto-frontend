import { yupResolver } from '@hookform/resolvers/yup';
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
    reset,
    control,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(SchemaPefilDonator),
  });

  const onSubmit = (data) => {
    console.log({ data });

    console.log('deu certo');
    reset();
  };
  return (
    <div className="flex gap-[90px]">
      <SidebarReceptor />
      <section className="pt-[60px]   pb-[90px] pr-[150] ">
        <Avatar initialLettersUser="US" nameUser="User" typeUser="Receptor" />
        <form
          className="mt-[75px]  flex flex-col "
          onSubmit={handleSubmit(onSubmit)}
        >
          <BodyPerfilReceptor errors={errors} control={control} />

          <div className="justify-self-end self-end">
            <ButtonFormRegister text="Confirmar e salvar" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditPerfilReceptor;
