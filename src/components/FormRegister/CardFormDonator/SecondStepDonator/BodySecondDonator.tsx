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
  uf: yup.string().required('O campo é obrigatório!'),
  complemento: yup.string().required('O campo é obrigatório!'),
  datadenascimento: yup.string().required('O campo é obrigatório!'),
  genero: yup.string().required('O campo é obrigatório!'),
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
