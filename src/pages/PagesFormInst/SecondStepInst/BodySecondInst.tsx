import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import TextTitle from '../../../components/TextTitle/TextTitle';
import { IFormValuegSecondStep } from '../../../interfaces/FormDonatorSecondStep';
import ColumItemLeftSecondStep from './ColumItemLeftSecondStep';
import ColumItemRightSecondStep from './ColumItemRightSecondStep';

const schema = yup.object({
  nome: yup.string().required('O campo é obrigatório!'),
  endereco: yup.string().required('O campo é obrigatório!'),
  cep: yup
    .string()
    .min(8, 'O CEP deve conter oito digitos')
    .required('O campo é obrigatório!'),
  telefone: yup
    .string()
    .min(9, 'O campo telefone deve ter nove digítos')
    .required('O campo é obrigatório!'),
  cidade: yup.string().required('O campo é obrigatório!'),
  /*   uf: yup.mixed().required(),
   */
  complemento: yup.string().required('O campo é obrigatório!'),
  datadenascimento: yup.string().required('O campo é obrigatório!'),
  genero: yup
    .string()
    .required()
    .oneOf(['masculino', 'feminino'])
    .label('Selected Country'),
});

const BodySecondReceptor = () => {
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
    navigate('/');
  };
  return (
    <>
      <div className="cursor-pointer">
        <ArrowLeft />
      </div>
      <form
        className="formSteps flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextTitle
          title="Cadastre-se como uma instituição"
          textInfo="Preencha os campos a seguir com as suas informações do responsável da instituição."
        />
          <InputItem
          htmlFor="nome"
          placeholder="Digite o seu nome completo"
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

export default BodySecondReceptor;
