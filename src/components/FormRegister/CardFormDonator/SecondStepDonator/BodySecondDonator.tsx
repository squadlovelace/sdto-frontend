import { FunctionComponent } from 'react';
import ButtonFormRegister from '../../../Buttons/ButtonFormRegister';
import TextTitle from '../../../TextTitle/TextTitle';
import ArrowLeft from '../../ArrowLeft';
import ColumItemLeftSecondStep from './ColumItemLeftSecondStep';
import ColumItemRightSecondStep from './ColumItemRightSecondStep';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValuegFirstStep } from '../../../../interfaces/registerType';

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

const BodySecondDonator: FunctionComponent<{
  handleStep: (i: number) => void;
}> = ({ handleStep }) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<IFormValuegFirstStep>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormValuegFirstStep> = (data) => {
    console.log({ data });
    console.log('deu certo');

    reset();
  };
  return (
    <>
      <div onClick={() => handleStep(0)} className="cursor-pointer">
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
        <ButtonFormRegister
          text="Confirmar e continuar"
          type="button"
          handleStep={() => handleStep(2)}
        />
      </form>
    </>
  );
};

export default BodySecondDonator;
