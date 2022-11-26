import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import TextTitle from '../../../components/TextTitle/TextTitle';
import { IFormValuegFirstStep } from '../../../interfaces/registerType';
import { ColumItemLeft } from './ColumItemLeft';
import ColumItemRight from './ColumItemRight';

const schema = yup.object({
  razao: yup.string().required('O campo é obrigatório!'),
  endereco: yup.string().required('O campo é obrigatório!'),
  cep: yup
    .string()
    .min(8, 'o campo é obrigatório')
    .required('O campo é obrigatório!'),
  cidade: yup.string().required('O campo é obrigatório!'),
  cnpj: yup.string().required('O campo é obrigatório!'),
});

const BodyFirstStepInst = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IFormValuegFirstStep>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormValuegFirstStep> = (data, e) => {
    e?.preventDefault();
    console.log({ data });

    console.log('deu certo');
    navigate('/formintituicao/secondstep');
    reset();
  };

  return (
    <>
      <Link to="/login">
        <ArrowLeft />
      </Link>
      <form
        className="formSteps flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextTitle
          title="Cadastre-se como um Instituição"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
        />
        <InputItem
          htmlFor="razao"
          placeholder="Digite a razão social da Instituição"
          textLabel="Razão"
          errors={errors}
          control={control}
        />
        <div className="flex justify-between gap-[50px] ">
          <ColumItemLeft errors={errors} control={control} />
          <ColumItemRight errors={errors} control={control} />
        </div>

        <ButtonFormRegister text="Confirmar e continuar" />
      </form>
    </>
  );
};

export default BodyFirstStepInst;
