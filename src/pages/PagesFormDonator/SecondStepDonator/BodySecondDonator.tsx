import { FunctionComponent } from 'react';
import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import TextTitle from '../../../components/TextTitle/TextTitle';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';
import ColumItemLeftSecondStep from './ColumItemLeftSecondStep';
import ColumItemRightSecondStep from './ColumItemRightSecondStep';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValuegSecondStep } from '../../../interfaces/FormDonatorSecondStep';
import { useNavigate } from 'react-router-dom';

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
  uf: yup
    .mixed()
    .required()
    .oneOf([
      'AC',
      'AL',
      'AP',
      'AM',
      'BA',
      'CE',
      'DF',
      'ES',
      'GO',
      'MA',
      'MT',
      'MS',
      'MG',
      'PA',
      'PB',
      'PE',
      'PI',
      'PR',
      'RJ',
      'RN',
      'RO',
      'RR',
      'RS',
      'SC',
      'SP',
      'SE',
      'TO',
    ])
    .label('uf'),
  complemento: yup.string().required('O campo é obrigatório!'),
  datadenascimento: yup.string().required('O campo é obrigatório!'),
  genero: yup
    .mixed()
    .oneOf(['masculino', 'feminino'], 'O campo é obrigatório!')
    .required()
    .label('genero'),
});

const BodySecondDonator = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
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
          title="Cadastre-se como um doador"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
        />
        <div className="flex justify-between gap-[50px] ">
          <ColumItemLeftSecondStep errors={errors} control={control} />
          <ColumItemRightSecondStep errors={errors} control={control} />
        </div>
        <ButtonFormRegister text="Confirmar e continuar" type="submit" />
      </form>
    </>
  );
};

export default BodySecondDonator;
