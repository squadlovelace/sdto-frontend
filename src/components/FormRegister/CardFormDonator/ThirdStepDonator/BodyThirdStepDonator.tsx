import { FunctionComponent } from 'react';
import ButtonFormRegister from '../../../Buttons/ButtonFormRegister';
import TextTitle from '../../../TextTitle/TextTitle';
import ArrowLeft from '../../ArrowLeft';
import InputCheckbox from '../../Inputs/InputCheckbox';
import { ColumItemLeft } from './ColumItemThirdLeft';
import ColumItemRight from './ColumItemThirdRight';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IFormValuegFirstStep } from '../../../../interfaces/registerType';

const schema = yup.object({
  tiposanguineo: yup.string().required('O campo é obrigatório!'),
  orgao: yup.string().required('O campo é obrigatório!'),
  tipodedoador: yup.string().required('O campo é obrigatório!'),
  termosDeServico: yup.string().required('O campo é obrigatório!'),
});

const BodyThirdtStepDonator: FunctionComponent<{
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
      <div onClick={() => handleStep(1)} className="cursor-pointer">
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
            htmlFor="termServices"
            nameInput="termsServices"
            textLabel="Ao clicar nesse botão você concorda com os nossos Termos e Serviços"
            errors={errors}
            control={control}
          />

          <ButtonFormRegister text="Finalizar Cadastro" type="submit" />
        </div>
      </form>
    </>
  );
};

export default BodyThirdtStepDonator;
