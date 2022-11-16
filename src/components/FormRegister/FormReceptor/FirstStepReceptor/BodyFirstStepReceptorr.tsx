import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import ButtonFormRegister from '../../../Buttons/ButtonFormRegister';
import TextTitle from '../../../TextTitle/TextTitle';
import ArrowLeft from '../../ArrowLeft';
import InputName from '../../Inputs/InputName';
import { ColumItemLeft } from './ColumItemLeft';
import ColumItemRight from './ColumItemRight';

const BodyFirstStepDonator: FunctionComponent<{
  handleStep: (i: number) => void;
}> = ({ handleStep }) => {
  return (
    <>
      <Link to="/">
        <ArrowLeft />
      </Link>
      <section className="formSteps flex flex-col">
        <TextTitle
          title="Cadastre-se como um receptor"
          textInfo="Preencha os campos a seguir com as suas informações dos dados de recptor que queira cadastrar"
        />
        <InputName
          htmlFor="Name"
          placeholder="Digite o seu nome completo"
          textLabel="Nome"
        />
        <div className="flex justify-between gap-[50px] ">
          <ColumItemLeft />
          <ColumItemRight />
        </div>
        <ButtonFormRegister
          text="Confirmar e continuar"
          type="button"
          handleStep={() => handleStep(1)}
        />
      </section>
    </>
  );
};

export default BodyFirstStepDonator;
