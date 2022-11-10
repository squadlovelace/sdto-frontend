import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import ButtonFormRegister from '../../../Buttons/ButtonFormRegister';
import TextTitle from '../../../TextTitle/TextTitle';
import ArrowLeft from '../../ArrowLeft';
import InputName from '../../Inputs/InputName';
import { ColumItemLeft } from './ColumItemLeft';
import ColumItemRight from './ColumItemRight';

const BodyFirstStepInstitution: FunctionComponent<{
  handleStep: (i: number) => void;
}> = ({ handleStep }) => {
  return (
    <>
      <Link to="/">
        <ArrowLeft />
      </Link>
      <section className="formSteps flex flex-col">
        <TextTitle
          title="Cadastre-se como uma instituição"
          textInfo="Preencha os campos a seguir com as informações da instituição que deseja cadastrar"
        />
        <InputName
          htmlFor="razao"
          placeholder="Digite a razão social da insituição"
          textLabel="Razão Social"
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

export default BodyFirstStepInstitution;
