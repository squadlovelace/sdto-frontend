import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';
import InputCheckbox from '../../../components/FormRegister/Inputs/InputCheckbox';
import InputItem from '../../../components/FormRegister/Inputs/InputItem';
import TextTitle from '../../../components/TextTitle/TextTitle';
import { ValueThirdStep } from '../../../interfaces/FormDonatorStep';
import { ColumItemLeft } from './ColumItemThirdLeft';
import ColumItemRight from './ColumItemThirdRight';

const schema = yup.object({
  cep: yup
  .string()
  .min(8, 'O CEP deve conter oito digitos')
  .required('O campo é obrigatório!'),
  telefone: yup
  .string()
  .min(9, 'O campo telefone deve ter nove digítos')
  .required('O campo é obrigatório!'),
  cidade: yup.string().required('O campo é obrigatório!'),
  complemento: yup.string().required('O campo é obrigatório!'),
  uf: yup.string().required('O campo é obrigatório!'),
  termosDeServico: yup.bool().oneOf([true], 'O termos e seviços é obrigatório'),
});

const BodyThirdtStepReceptor = () => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<ValueThirdStep>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ValueThirdStep> = (data) => {
    console.log({ data });
    console.log('deu certo');
    navigate('/login');

    reset();
  };

  return (
    <>
      <div className="cursor-pointer">
        <Link to="/formreceptor/secondstep">
          <ArrowLeft />
        </Link>
      </div>
      <form
        className="formSteps flex flex-col pb-[130px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextTitle
          title="Cadastre-se como um Receptor"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
        />

        <div className="flex justify-between gap-[50px] mb-[80px]">
          <ColumItemLeft errors={errors} control={control} />
          <ColumItemRight errors={errors} control={control} />
        </div>

        <InputItem
          htmlFor="comorbidade"
          placeholder="Digite sua comorbidade"
          textLabel="Comorbidade"
          errors={errors}
          control={control}
        />

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

export default BodyThirdtStepReceptor;
