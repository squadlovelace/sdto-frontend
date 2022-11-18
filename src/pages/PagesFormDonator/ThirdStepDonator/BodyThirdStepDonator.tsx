import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';
import InputCheckbox from '../../../components/FormRegister/Inputs/InputCheckbox';
import TextTitle from '../../../components/TextTitle/TextTitle';
import { ValueThirdStep } from '../../../interfaces/FormDonatorStep';
import { ColumItemLeft } from './ColumItemThirdLeft';
import ColumItemRight from './ColumItemThirdRight';

const schema = yup.object({
  tiposanguineo: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),
  tipodedoador: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),
  termosDeServico: yup.bool().oneOf([true], 'O termos e seviços é obrigatório'),
});

const BodyThirdtStepDonator = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ValueThirdStep>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<ValueThirdStep> = (data) => {
    console.log({ data });
    console.log('deu certo');

    reset();
  };

  return (
    <>
      <div className="cursor-pointer">
        <ArrowLeft />
      </div>
      <form
        className="formSteps flex flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextTitle
          title="Cadastre-se como um doador"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
        />

        <div className="flex justify-between gap-[50px] mb-[80px]">
          <ColumItemLeft errors={errors} control={control} />
          <ColumItemRight errors={errors} control={control} />
        </div>

        <div className="grid grid-cols-2 gap-10 mb-[150px]">
          <InputCheckbox
            htmlFor="termosDeServico"
            textLabel="Ao clicar nesse botão você concorda com os nossos Termos e Serviços"
            errors={errors}
            control={control}
          />

          <ButtonFormRegister text="Finalizar Cadastro" />
        </div>
      </form>
    </>
  );
};

export default BodyThirdtStepDonator;
