import { SubmitHandler, useForm, UseFormRegister } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import TextTitle from '../../../components/TextTitle/TextTitle';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';

import { IFormValuegFirstStep } from '../../../interfaces/registerType';

import { ColumItemLeft } from './ColumItemLeft';
import ColumItemRight from './ColumItemRight';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';

const schema = yup.object({
  nome: yup.string().required('O campo é obrigatório!'),
  email: yup
    .string()
    .email('digite um email válido')
    .required('O campo é obrigatório!'),
  senha: yup
    .string()
    .min(6, 'A senha deve conter seis digitos')
    .required('O campo é obrigatório!'),
  confirmarSenha: yup
    .string()
    .required('O campo é obrigatório!')
    .oneOf([yup.ref('senha')], 'As senhas precisam ser iguais'),
  confirmarEmail: yup
    .string()
    .required('O campo é obrigatório!')
    .oneOf([yup.ref('email')], 'Os email precisam ser iguais'),
  cpf: yup
    .string()
    .min(11, 'O cpf deve ter 11 digitos!')
    .required('O campo é obrigatório!'),
  rg: yup
    .string()
    .min(8, 'O RG deve ter 8 digítos!')
    .required('O campo é obrigatório!'),
});

const BodyFirstStepDonator = () => {
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
    navigate('/');
    reset();
  };

  return (
    <>
      <Link to="/">
        <ArrowLeft />
      </Link>
      <form
        className="formSteps flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextTitle
          title="Cadastre-se como um doador"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
        />
        <InputItem
          htmlFor="nome"
          placeholder="Digite o seu nome completo"
          textLabel="Nome"
          errors={errors}
          control={control}
        />
        <div className="flex justify-between gap-[50px] ">
          <ColumItemLeft errors={errors} control={control} />
          <ColumItemRight errors={errors} control={control} />
        </div>

        <ButtonFormRegister text="Confirmar e continuar" type="submit" />
      </form>
    </>
  );
};

export default BodyFirstStepDonator;
