import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import TextTitle from '../../../components/TextTitle/TextTitle';
import { IFormValuegSecondStep } from '../../../interfaces/FormDonatorStep';
import ColumItemLeftSecondStep from './ColumItemLeftSecondStep';
import ColumItemRightSecondStep from './ColumItemRightSecondStep';

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
  crm: yup
    .string()
    .required('O campo é obrigatório!'),
});

const BodySecondInst = () => {
  const {
    handleSubmit,
    formState: { errors },

    control,
  } = useForm<IFormValuegSecondStep>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormValuegSecondStep> = (data, e) => {
    e?.preventDefault();
    console.log({ data });

    console.log('deu certo');
    navigate('/formintituicao/thirdstep');
  };
  return (
    <>
      <div className="cursor-pointer">
        <Link to="/formintituicao/firststep">
          <ArrowLeft />
        </Link>
      </div>
      <form
        className="formSteps flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextTitle
          title="Cadastre-se como uma Instituição"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
        />
        <InputItem
          htmlFor="nome"
          placeholder="Digite o nome completo do responsável"
          textLabel="Nome"
          errors={errors}
          control={control}
        />
        <div className="flex justify-between gap-[50px] ">
          <ColumItemLeftSecondStep errors={errors} control={control} />
          <ColumItemRightSecondStep errors={errors} control={control} />
        </div>
        <ButtonFormRegister text="Confirmar e continuar" />
      </form>
    </>
  );
};

export default BodySecondInst;
