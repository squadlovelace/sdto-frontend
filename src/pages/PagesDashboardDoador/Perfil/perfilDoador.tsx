import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import SidebarReceptor from '../../../components/sidebar/sidebarreceptor';
import { SchemaPefilDonator } from '../../../data/yupSchema';
import Avatar from './Avatar';
import BodyPerfilReceptor from './BodyPerfilDoador';

const PerfilReceptor = () => {
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
    <div className="flex gap-[90px] pr-[200px]">
      <SidebarReceptor />
      <section className="pt-[60px]   pb-[90px] ">
        <Avatar initialLettersUser="US" nameUser="User" typeUser="Receptor" />
        <form className="mt-[75px]  ">
          <BodyPerfilReceptor errors={errors} control={control} />
        </form>
      </section>
    </div>
  );
};

export default PerfilReceptor;
