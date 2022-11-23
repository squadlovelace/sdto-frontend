import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import ButtonFormRegister from '../../../components/Buttons/ButtonFormRegister';
import ArrowLeft from '../../../components/FormRegister/ArrowLeft';
import TextTitle from '../../../components/TextTitle/TextTitle';
import { IFormValuegSecondStep } from '../../../interfaces/FormDonatorStep';
import ColumItemLeftSecondStep from './ColumItemLeftSecondStep';
import ColumItemRightSecondStep from './ColumItemRightSecondStep';

const schema = yup.object({
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
  complemento: yup.string().required('O campo é obrigatório!'),
  datadenascimento: yup
    .date()
    .nullable()
    .transform((curr, orig) => (orig === '' ? null : curr))
    .required('O campo é obrigatório'),
  genero: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),
  uf: yup
    .object()
    .shape({
      value: yup.string().required('O campo é obrigatório!'),
    })
    .required('O campo é obrigatório!')
    .nullable(),
});

const BodySecondDonator = () => {
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
    navigate('/formdonator/thirdstep');
  };
  return (
    <>
      <div className="cursor-pointer">
        <Link to="/formdonator/firststep">
          <ArrowLeft />
        </Link>
      </div>
      <form
        className="formSteps flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextTitle
          title="Cadastre-se como um Instituição"
          textInfo="Preencha os campos a seguir com as suas informações para cadastrar-se."
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

export default BodySecondDonator;